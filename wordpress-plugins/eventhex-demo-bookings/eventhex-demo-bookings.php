<?php
/**
 * Plugin Name: EventHex Demo Bookings
 * Description: Dedicated booking and follow-up system for the EventHex Book a Demo flow.
 * Version: 1.0.0
 * Author: EventHex
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const EHDB_VERSION = '1.0.0';
const EHDB_OPTION_SETTINGS = 'ehdb_settings';
const EHDB_CRON_REMINDER = 'ehdb_send_reminder';
const EHDB_CRON_FOLLOWUP = 'ehdb_send_followup';

function ehdb_table_bookings() {
	global $wpdb;
	return $wpdb->prefix . 'ehdb_bookings';
}

function ehdb_default_settings() {
	return [
		'meeting_title' => 'EventHex AI Product Demo',
		'meeting_duration' => 30,
		'timezone' => 'Asia/Kolkata',
		'meeting_location' => 'Google Meet link shared after confirmation',
		'meeting_url' => '',
		'booking_window_days' => 45,
		'min_notice_hours' => 12,
		'per_slot_capacity' => 1,
		'working_days' => [ '1', '2', '3', '4', '5' ],
		'time_slots' => [ '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30' ],
		'blocked_dates' => [],
		'admin_emails' => [ 'info@eventhex.ai' ],
		'success_message' => 'Your demo request is confirmed. Check your inbox for the booking email.',
		'confirmation_subject' => 'Your EventHex demo is booked for {booking_date} at {booking_time}',
		'confirmation_body' => '<p>Hi {name},</p><p>Your EventHex demo is booked.</p><p><strong>When:</strong> {booking_date} at {booking_time}<br><strong>Duration:</strong> {meeting_duration} minutes<br><strong>Location:</strong> {meeting_location}</p><p>We will walk you through the platform and answer your questions.</p><p>Regards,<br>EventHex Team</p>',
		'admin_subject' => 'New EventHex demo booking: {name} on {booking_date} at {booking_time}',
		'admin_body' => '<p>A new demo booking has been created.</p><p><strong>Name:</strong> {name}<br><strong>Email:</strong> {email}<br><strong>Company:</strong> {company}<br><strong>Phone:</strong> {phone}<br><strong>Date:</strong> {booking_date}<br><strong>Time:</strong> {booking_time}<br><strong>Notes:</strong> {notes}</p><p><a href="{admin_url}">View in WordPress</a></p>',
		'reminder_enabled' => '1',
		'reminder_hours_before' => 24,
		'reminder_subject' => 'Reminder: Your EventHex demo is on {booking_date} at {booking_time}',
		'reminder_body' => '<p>Hi {name},</p><p>This is a reminder about your EventHex demo scheduled for {booking_date} at {booking_time}.</p><p><strong>Location:</strong> {meeting_location}</p><p>If you need to reschedule, reply to this email.</p>',
		'followup_enabled' => '1',
		'followup_hours_after' => 24,
		'followup_subject' => 'Thanks for your time with EventHex',
		'followup_body' => '<p>Hi {name},</p><p>Thanks for taking the EventHex demo.</p><p>If you want a team walkthrough or a custom use-case session, reply to this email and we will arrange it.</p>',
	];
}

function ehdb_get_settings() {
	$saved = get_option( EHDB_OPTION_SETTINGS, [] );
	return wp_parse_args( is_array( $saved ) ? $saved : [], ehdb_default_settings() );
}

function ehdb_sanitize_settings( $raw ) {
	$defaults = ehdb_default_settings();
	$working_days = isset( $raw['working_days'] ) ? array_map( 'strval', (array) $raw['working_days'] ) : $defaults['working_days'];
	$time_slots = isset( $raw['time_slots'] ) ? preg_split( '/\r\n|\r|\n/', (string) $raw['time_slots'] ) : $defaults['time_slots'];
	$time_slots = array_values( array_filter( array_map( 'trim', $time_slots ) ) );
	$blocked_dates = isset( $raw['blocked_dates'] ) ? preg_split( '/\r\n|\r|\n/', (string) $raw['blocked_dates'] ) : [];
	$blocked_dates = array_values( array_filter( array_map( 'trim', $blocked_dates ) ) );
	$admin_emails = isset( $raw['admin_emails'] ) ? preg_split( '/\r\n|\r|\n|,/', (string) $raw['admin_emails'] ) : $defaults['admin_emails'];
	$admin_emails = array_values( array_filter( array_map( 'sanitize_email', $admin_emails ) ) );

	$timezone = sanitize_text_field( $raw['timezone'] ?? $defaults['timezone'] );
	if ( ! in_array( $timezone, timezone_identifiers_list(), true ) ) {
		$timezone = $defaults['timezone'];
	}

	return [
		'meeting_title' => sanitize_text_field( $raw['meeting_title'] ?? $defaults['meeting_title'] ),
		'meeting_duration' => max( 15, (int) ( $raw['meeting_duration'] ?? $defaults['meeting_duration'] ) ),
		'timezone' => $timezone,
		'meeting_location' => sanitize_text_field( $raw['meeting_location'] ?? $defaults['meeting_location'] ),
		'meeting_url' => esc_url_raw( $raw['meeting_url'] ?? $defaults['meeting_url'] ),
		'booking_window_days' => max( 7, (int) ( $raw['booking_window_days'] ?? $defaults['booking_window_days'] ) ),
		'min_notice_hours' => max( 1, (int) ( $raw['min_notice_hours'] ?? $defaults['min_notice_hours'] ) ),
		'per_slot_capacity' => max( 1, (int) ( $raw['per_slot_capacity'] ?? $defaults['per_slot_capacity'] ) ),
		'working_days' => array_values( array_filter( $working_days, static fn( $day ) => preg_match( '/^[0-6]$/', $day ) ) ),
		'time_slots' => $time_slots,
		'blocked_dates' => array_values( array_filter( $blocked_dates, static fn( $date ) => preg_match( '/^\d{4}-\d{2}-\d{2}$/', $date ) ) ),
		'admin_emails' => $admin_emails ?: $defaults['admin_emails'],
		'success_message' => sanitize_text_field( $raw['success_message'] ?? $defaults['success_message'] ),
		'confirmation_subject' => sanitize_text_field( $raw['confirmation_subject'] ?? $defaults['confirmation_subject'] ),
		'confirmation_body' => wp_kses_post( $raw['confirmation_body'] ?? $defaults['confirmation_body'] ),
		'admin_subject' => sanitize_text_field( $raw['admin_subject'] ?? $defaults['admin_subject'] ),
		'admin_body' => wp_kses_post( $raw['admin_body'] ?? $defaults['admin_body'] ),
		'reminder_enabled' => empty( $raw['reminder_enabled'] ) ? '0' : '1',
		'reminder_hours_before' => max( 1, (int) ( $raw['reminder_hours_before'] ?? $defaults['reminder_hours_before'] ) ),
		'reminder_subject' => sanitize_text_field( $raw['reminder_subject'] ?? $defaults['reminder_subject'] ),
		'reminder_body' => wp_kses_post( $raw['reminder_body'] ?? $defaults['reminder_body'] ),
		'followup_enabled' => empty( $raw['followup_enabled'] ) ? '0' : '1',
		'followup_hours_after' => max( 1, (int) ( $raw['followup_hours_after'] ?? $defaults['followup_hours_after'] ) ),
		'followup_subject' => sanitize_text_field( $raw['followup_subject'] ?? $defaults['followup_subject'] ),
		'followup_body' => wp_kses_post( $raw['followup_body'] ?? $defaults['followup_body'] ),
	];
}

function ehdb_install() {
	global $wpdb;
	$table = ehdb_table_bookings();
	$charset = $wpdb->get_charset_collate();
	$sql = "CREATE TABLE {$table} (
		id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
		status VARCHAR(20) NOT NULL DEFAULT 'confirmed',
		booking_date DATE NOT NULL,
		booking_time TIME NOT NULL,
		timezone VARCHAR(64) NOT NULL,
		duration_minutes SMALLINT UNSIGNED NOT NULL DEFAULT 30,
		name VARCHAR(120) NOT NULL,
		email VARCHAR(190) NOT NULL,
		company VARCHAR(190) NOT NULL,
		phone VARCHAR(60) NOT NULL,
		notes TEXT NULL,
		meta LONGTEXT NULL,
		created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		PRIMARY KEY (id),
		KEY booking_slot (booking_date, booking_time),
		KEY status_created (status, created_at),
		KEY email_idx (email)
	) {$charset};";

	require_once ABSPATH . 'wp-admin/includes/upgrade.php';
	dbDelta( $sql );

	if ( ! get_option( EHDB_OPTION_SETTINGS ) ) {
		update_option( EHDB_OPTION_SETTINGS, ehdb_default_settings(), false );
	}
}
register_activation_hook( __FILE__, 'ehdb_install' );

add_action( 'plugins_loaded', 'ehdb_bootstrap' );
function ehdb_bootstrap() {
	add_action( 'admin_menu', 'ehdb_register_admin_menu' );
	add_action( 'admin_post_ehdb_save_settings', 'ehdb_handle_save_settings' );
	add_action( 'admin_post_ehdb_update_booking_status', 'ehdb_handle_booking_status' );
	add_action( 'admin_post_ehdb_export_bookings', 'ehdb_handle_export_bookings' );
	add_action( 'rest_api_init', 'ehdb_register_rest_routes' );
	add_action( 'rest_api_init', 'ehdb_setup_cors', 15 );
	add_action( EHDB_CRON_REMINDER, 'ehdb_send_reminder_email' );
	add_action( EHDB_CRON_FOLLOWUP, 'ehdb_send_followup_email' );
}

function ehdb_register_admin_menu() {
	add_menu_page(
		'EventHex Demo Bookings',
		'Demo Bookings',
		'manage_options',
		'ehdb-bookings',
		'ehdb_render_bookings_page',
		'dashicons-calendar-alt',
		31
	);

	add_submenu_page(
		'ehdb-bookings',
		'Booking Settings',
		'Settings',
		'manage_options',
		'ehdb-settings',
		'ehdb_render_settings_page'
	);
}

function ehdb_handle_save_settings() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( 'Forbidden' );
	}
	check_admin_referer( 'ehdb_save_settings' );
	$settings = ehdb_sanitize_settings( wp_unslash( $_POST ) );
	update_option( EHDB_OPTION_SETTINGS, $settings, false );
	wp_safe_redirect( admin_url( 'admin.php?page=ehdb-settings&saved=1' ) );
	exit;
}

function ehdb_handle_booking_status() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( 'Forbidden' );
	}
	check_admin_referer( 'ehdb_update_booking_status' );
	$id = isset( $_POST['booking_id'] ) ? (int) $_POST['booking_id'] : 0;
	$status = sanitize_key( $_POST['status'] ?? '' );
	$allowed = [ 'confirmed', 'completed', 'cancelled', 'no_show' ];
	if ( ! $id || ! in_array( $status, $allowed, true ) ) {
		wp_safe_redirect( admin_url( 'admin.php?page=ehdb-bookings' ) );
		exit;
	}
	global $wpdb;
	$wpdb->update( ehdb_table_bookings(), [ 'status' => $status ], [ 'id' => $id ], [ '%s' ], [ '%d' ] );
	wp_safe_redirect( admin_url( 'admin.php?page=ehdb-bookings&updated=1' ) );
	exit;
}

function ehdb_handle_export_bookings() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( 'Forbidden' );
	}
	check_admin_referer( 'ehdb_export_bookings' );
	global $wpdb;
	$items = $wpdb->get_results( "SELECT * FROM " . ehdb_table_bookings() . " ORDER BY booking_date DESC, booking_time DESC", ARRAY_A );
	$filename = 'eventhex-demo-bookings-' . gmdate( 'Y-m-d' ) . '.csv';
	header( 'Content-Type: text/csv; charset=utf-8' );
	header( 'Content-Disposition: attachment; filename=' . $filename );
	$out = fopen( 'php://output', 'w' );
	fputcsv( $out, [ 'ID', 'Status', 'Date', 'Time', 'Timezone', 'Name', 'Email', 'Company', 'Phone', 'Notes', 'Created At' ] );
	foreach ( $items as $item ) {
		fputcsv( $out, [ $item['id'], $item['status'], $item['booking_date'], $item['booking_time'], $item['timezone'], $item['name'], $item['email'], $item['company'], $item['phone'], wp_strip_all_tags( (string) $item['notes'] ), $item['created_at'] ] );
	}
	fclose( $out );
	exit;
}

function ehdb_render_bookings_page() {
	global $wpdb;
	$status = sanitize_key( $_GET['status'] ?? '' );
	$where = '';
	$args = [];
	if ( $status ) {
		$where = 'WHERE status = %s';
		$args[] = $status;
	}
	$query = "SELECT * FROM " . ehdb_table_bookings() . " {$where} ORDER BY booking_date DESC, booking_time DESC, created_at DESC";
	$items = $args ? $wpdb->get_results( $wpdb->prepare( $query, $args ), ARRAY_A ) : $wpdb->get_results( $query, ARRAY_A );
	?>
	<div class="wrap">
		<h1 class="wp-heading-inline">EventHex Demo Bookings</h1>
		<a href="<?php echo esc_url( wp_nonce_url( admin_url( 'admin-post.php?action=ehdb_export_bookings' ), 'ehdb_export_bookings' ) ); ?>" class="page-title-action">Export CSV</a>
		<hr class="wp-header-end">
		<?php if ( isset( $_GET['updated'] ) ) : ?>
			<div class="notice notice-success is-dismissible"><p>Booking updated.</p></div>
		<?php endif; ?>
		<table class="widefat striped">
			<thead>
				<tr>
					<th>ID</th>
					<th>Date</th>
					<th>Time</th>
					<th>Lead</th>
					<th>Company</th>
					<th>Status</th>
					<th>Notes</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
			<?php if ( empty( $items ) ) : ?>
				<tr><td colspan="8">No bookings yet.</td></tr>
			<?php endif; ?>
			<?php foreach ( $items as $item ) : ?>
				<tr>
					<td><?php echo (int) $item['id']; ?></td>
					<td><?php echo esc_html( $item['booking_date'] ); ?></td>
					<td><?php echo esc_html( substr( $item['booking_time'], 0, 5 ) ); ?></td>
					<td>
						<strong><?php echo esc_html( $item['name'] ); ?></strong><br>
						<a href="mailto:<?php echo esc_attr( $item['email'] ); ?>"><?php echo esc_html( $item['email'] ); ?></a><br>
						<?php echo esc_html( $item['phone'] ); ?>
					</td>
					<td><?php echo esc_html( $item['company'] ); ?></td>
					<td><span class="button button-small"><?php echo esc_html( ucfirst( str_replace( '_', ' ', $item['status'] ) ) ); ?></span></td>
					<td><?php echo esc_html( wp_trim_words( (string) $item['notes'], 16 ) ); ?></td>
					<td>
						<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
							<?php wp_nonce_field( 'ehdb_update_booking_status' ); ?>
							<input type="hidden" name="action" value="ehdb_update_booking_status">
							<input type="hidden" name="booking_id" value="<?php echo (int) $item['id']; ?>">
							<select name="status">
								<?php foreach ( [ 'confirmed', 'completed', 'cancelled', 'no_show' ] as $option ) : ?>
									<option value="<?php echo esc_attr( $option ); ?>" <?php selected( $item['status'], $option ); ?>><?php echo esc_html( ucfirst( str_replace( '_', ' ', $option ) ) ); ?></option>
								<?php endforeach; ?>
							</select>
							<button class="button button-secondary">Save</button>
						</form>
					</td>
				</tr>
			<?php endforeach; ?>
			</tbody>
		</table>
	</div>
	<?php
}

function ehdb_render_settings_page() {
	$settings = ehdb_get_settings();
	$working_days = [ '0' => 'Sun', '1' => 'Mon', '2' => 'Tue', '3' => 'Wed', '4' => 'Thu', '5' => 'Fri', '6' => 'Sat' ];
	?>
	<div class="wrap">
		<h1>EventHex Demo Booking Settings</h1>
		<?php if ( isset( $_GET['saved'] ) ) : ?>
			<div class="notice notice-success is-dismissible"><p>Settings saved.</p></div>
		<?php endif; ?>
		<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
			<?php wp_nonce_field( 'ehdb_save_settings' ); ?>
			<input type="hidden" name="action" value="ehdb_save_settings">
			<table class="form-table" role="presentation">
				<tr>
					<th scope="row"><label for="meeting_title">Meeting title</label></th>
					<td><input name="meeting_title" id="meeting_title" type="text" class="regular-text" value="<?php echo esc_attr( $settings['meeting_title'] ); ?>"></td>
				</tr>
				<tr>
					<th scope="row"><label for="meeting_duration">Duration (minutes)</label></th>
					<td><input name="meeting_duration" id="meeting_duration" type="number" min="15" step="5" value="<?php echo (int) $settings['meeting_duration']; ?>"></td>
				</tr>
				<tr>
					<th scope="row"><label for="timezone">Timezone</label></th>
					<td><input name="timezone" id="timezone" type="text" class="regular-text" value="<?php echo esc_attr( $settings['timezone'] ); ?>"></td>
				</tr>
				<tr>
					<th scope="row"><label for="meeting_location">Location label</label></th>
					<td><input name="meeting_location" id="meeting_location" type="text" class="regular-text" value="<?php echo esc_attr( $settings['meeting_location'] ); ?>"></td>
				</tr>
				<tr>
					<th scope="row"><label for="meeting_url">Meeting URL</label></th>
					<td><input name="meeting_url" id="meeting_url" type="url" class="regular-text" value="<?php echo esc_attr( $settings['meeting_url'] ); ?>"></td>
				</tr>
				<tr>
					<th scope="row"><label for="booking_window_days">Booking window (days)</label></th>
					<td><input name="booking_window_days" id="booking_window_days" type="number" min="7" value="<?php echo (int) $settings['booking_window_days']; ?>"></td>
				</tr>
				<tr>
					<th scope="row"><label for="min_notice_hours">Minimum notice (hours)</label></th>
					<td><input name="min_notice_hours" id="min_notice_hours" type="number" min="1" value="<?php echo (int) $settings['min_notice_hours']; ?>"></td>
				</tr>
				<tr>
					<th scope="row"><label for="per_slot_capacity">Bookings per slot</label></th>
					<td><input name="per_slot_capacity" id="per_slot_capacity" type="number" min="1" value="<?php echo (int) $settings['per_slot_capacity']; ?>"></td>
				</tr>
				<tr>
					<th scope="row">Working days</th>
					<td>
						<?php foreach ( $working_days as $value => $label ) : ?>
							<label style="display:inline-block;margin-right:12px"><input type="checkbox" name="working_days[]" value="<?php echo esc_attr( $value ); ?>" <?php checked( in_array( $value, $settings['working_days'], true ) ); ?>> <?php echo esc_html( $label ); ?></label>
						<?php endforeach; ?>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="time_slots">Time slots</label></th>
					<td><textarea name="time_slots" id="time_slots" rows="8" class="large-text code"><?php echo esc_textarea( implode( PHP_EOL, $settings['time_slots'] ) ); ?></textarea><p class="description">One slot per line. Example: 10:00</p></td>
				</tr>
				<tr>
					<th scope="row"><label for="blocked_dates">Blocked dates</label></th>
					<td><textarea name="blocked_dates" id="blocked_dates" rows="6" class="large-text code"><?php echo esc_textarea( implode( PHP_EOL, $settings['blocked_dates'] ) ); ?></textarea><p class="description">One date per line in YYYY-MM-DD format.</p></td>
				</tr>
				<tr>
					<th scope="row"><label for="admin_emails">Admin emails</label></th>
					<td><textarea name="admin_emails" id="admin_emails" rows="4" class="large-text code"><?php echo esc_textarea( implode( PHP_EOL, $settings['admin_emails'] ) ); ?></textarea></td>
				</tr>
				<tr>
					<th scope="row"><label for="success_message">Success message</label></th>
					<td><input name="success_message" id="success_message" type="text" class="large-text" value="<?php echo esc_attr( $settings['success_message'] ); ?>"></td>
				</tr>
				<tr>
					<th scope="row"><label for="confirmation_subject">Confirmation subject</label></th>
					<td><input name="confirmation_subject" id="confirmation_subject" type="text" class="large-text" value="<?php echo esc_attr( $settings['confirmation_subject'] ); ?>"></td>
				</tr>
				<tr>
					<th scope="row"><label for="confirmation_body">Confirmation email</label></th>
					<td><textarea name="confirmation_body" id="confirmation_body" rows="8" class="large-text code"><?php echo esc_textarea( $settings['confirmation_body'] ); ?></textarea></td>
				</tr>
				<tr>
					<th scope="row"><label for="admin_subject">Admin subject</label></th>
					<td><input name="admin_subject" id="admin_subject" type="text" class="large-text" value="<?php echo esc_attr( $settings['admin_subject'] ); ?>"></td>
				</tr>
				<tr>
					<th scope="row"><label for="admin_body">Admin email</label></th>
					<td><textarea name="admin_body" id="admin_body" rows="8" class="large-text code"><?php echo esc_textarea( $settings['admin_body'] ); ?></textarea></td>
				</tr>
				<tr>
					<th scope="row">Reminder email</th>
					<td>
						<label><input type="checkbox" name="reminder_enabled" value="1" <?php checked( $settings['reminder_enabled'], '1' ); ?>> Enable reminder</label><br><br>
						<label for="reminder_hours_before">Hours before</label> <input name="reminder_hours_before" id="reminder_hours_before" type="number" min="1" value="<?php echo (int) $settings['reminder_hours_before']; ?>"><br><br>
						<input name="reminder_subject" type="text" class="large-text" value="<?php echo esc_attr( $settings['reminder_subject'] ); ?>"><br><br>
						<textarea name="reminder_body" rows="6" class="large-text code"><?php echo esc_textarea( $settings['reminder_body'] ); ?></textarea>
					</td>
				</tr>
				<tr>
					<th scope="row">Follow-up email</th>
					<td>
						<label><input type="checkbox" name="followup_enabled" value="1" <?php checked( $settings['followup_enabled'], '1' ); ?>> Enable follow-up</label><br><br>
						<label for="followup_hours_after">Hours after</label> <input name="followup_hours_after" id="followup_hours_after" type="number" min="1" value="<?php echo (int) $settings['followup_hours_after']; ?>"><br><br>
						<input name="followup_subject" type="text" class="large-text" value="<?php echo esc_attr( $settings['followup_subject'] ); ?>"><br><br>
						<textarea name="followup_body" rows="6" class="large-text code"><?php echo esc_textarea( $settings['followup_body'] ); ?></textarea>
						<p class="description">Tokens: {name}, {email}, {company}, {phone}, {booking_date}, {booking_time}, {meeting_title}, {meeting_duration}, {meeting_location}, {meeting_url}, {notes}, {admin_url}</p>
					</td>
				</tr>
			</table>
			<?php submit_button( 'Save settings' ); ?>
		</form>
	</div>
	<?php
}

function ehdb_register_rest_routes() {
	register_rest_route(
		'eventhex-demo/v1',
		'/config',
		[
			'methods' => 'GET',
			'callback' => 'ehdb_rest_config',
			'permission_callback' => '__return_true',
		]
	);

	register_rest_route(
		'eventhex-demo/v1',
		'/availability',
		[
			'methods' => 'GET',
			'callback' => 'ehdb_rest_availability',
			'permission_callback' => '__return_true',
		]
	);

	register_rest_route(
		'eventhex-demo/v1',
		'/book',
		[
			'methods' => 'POST',
			'callback' => 'ehdb_rest_book',
			'permission_callback' => '__return_true',
		]
	);
}

function ehdb_setup_cors() {
	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
	add_filter(
		'rest_pre_serve_request',
		static function ( $value ) {
			$allowed = [
				'https://eventhex.ai',
				'https://www.eventhex.ai',
				'http://localhost:4321',
				'http://localhost:4322',
				'http://localhost:4323',
				'http://127.0.0.1:4321',
				'http://127.0.0.1:4322',
				'http://127.0.0.1:4323',
			];
			$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
			if ( in_array( $origin, $allowed, true ) ) {
				header( 'Access-Control-Allow-Origin: ' . $origin );
				header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
				header( 'Access-Control-Allow-Headers: Content-Type, Authorization' );
			}
			return $value;
		}
	);
}

function ehdb_public_config() {
	$settings = ehdb_get_settings();
	return [
		'meeting_title' => $settings['meeting_title'],
		'meeting_duration' => (int) $settings['meeting_duration'],
		'timezone' => $settings['timezone'],
		'meeting_location' => $settings['meeting_location'],
		'meeting_url' => $settings['meeting_url'],
		'booking_window_days' => (int) $settings['booking_window_days'],
		'success_message' => $settings['success_message'],
	];
}

function ehdb_rest_config() {
	return rest_ensure_response( ehdb_public_config() );
}

function ehdb_rest_availability( WP_REST_Request $request ) {
	$month = sanitize_text_field( $request->get_param( 'month' ) ?: gmdate( 'Y-m' ) );
	if ( ! preg_match( '/^\d{4}-\d{2}$/', $month ) ) {
		return new WP_Error( 'invalid_month', 'Month must be YYYY-MM.', [ 'status' => 422 ] );
	}
	return rest_ensure_response(
		[
			'month' => $month,
			'config' => ehdb_public_config(),
			'availability' => ehdb_month_availability( $month ),
		]
	);
}

function ehdb_rest_book( WP_REST_Request $request ) {
	if ( ! empty( $request->get_param( 'hp_field' ) ) ) {
		return rest_ensure_response( [ 'success' => true, 'message' => ehdb_get_settings()['success_message'] ] );
	}

	$ip = sanitize_text_field( $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0' );
	$rate_key = 'ehdb_rate_' . md5( $ip );
	$attempts = (int) get_transient( $rate_key );
	if ( $attempts >= 6 ) {
		return new WP_Error( 'rate_limited', 'Too many booking attempts. Please try again later.', [ 'status' => 429 ] );
	}
	set_transient( $rate_key, $attempts + 1, 10 * MINUTE_IN_SECONDS );

	$data = [
		'name' => sanitize_text_field( (string) $request->get_param( 'name' ) ),
		'email' => sanitize_email( (string) $request->get_param( 'email' ) ),
		'company' => sanitize_text_field( (string) $request->get_param( 'company' ) ),
		'phone' => sanitize_text_field( (string) $request->get_param( 'phone' ) ),
		'notes' => sanitize_textarea_field( (string) $request->get_param( 'notes' ) ),
		'booking_date' => sanitize_text_field( (string) $request->get_param( 'booking_date' ) ),
		'booking_time' => sanitize_text_field( (string) $request->get_param( 'booking_time' ) ),
	];

	$errors = [];
	if ( '' === $data['name'] ) {
		$errors[] = 'Name is required.';
	}
	if ( ! is_email( $data['email'] ) ) {
		$errors[] = 'A valid email is required.';
	}
	if ( '' === $data['company'] ) {
		$errors[] = 'Company is required.';
	}
	if ( '' === $data['phone'] ) {
		$errors[] = 'Phone is required.';
	}
	if ( ! preg_match( '/^\d{4}-\d{2}-\d{2}$/', $data['booking_date'] ) ) {
		$errors[] = 'Booking date is invalid.';
	}
	if ( ! preg_match( '/^\d{2}:\d{2}$/', $data['booking_time'] ) ) {
		$errors[] = 'Booking time is invalid.';
	}
	if ( $errors ) {
		return new WP_Error( 'validation_error', implode( ' ', $errors ), [ 'status' => 422 ] );
	}

	if ( ! ehdb_is_slot_available( $data['booking_date'], $data['booking_time'] ) ) {
		return new WP_Error( 'slot_unavailable', 'That time slot is no longer available.', [ 'status' => 409 ] );
	}

	global $wpdb;
	$settings = ehdb_get_settings();
	$inserted = $wpdb->insert(
		ehdb_table_bookings(),
		[
			'status' => 'confirmed',
			'booking_date' => $data['booking_date'],
			'booking_time' => $data['booking_time'] . ':00',
			'timezone' => $settings['timezone'],
			'duration_minutes' => (int) $settings['meeting_duration'],
			'name' => $data['name'],
			'email' => $data['email'],
			'company' => $data['company'],
			'phone' => $data['phone'],
			'notes' => $data['notes'],
			'meta' => wp_json_encode(
				[
					'ip' => $ip,
					'user_agent' => sanitize_text_field( substr( (string) ( $_SERVER['HTTP_USER_AGENT'] ?? '' ), 0, 500 ) ),
					'source' => 'astro-demo-page',
				]
			),
		],
		[ '%s', '%s', '%s', '%s', '%d', '%s', '%s', '%s', '%s', '%s', '%s' ]
	);

	if ( ! $inserted ) {
		return new WP_Error( 'db_error', 'Could not create the booking.', [ 'status' => 500 ] );
	}

	$booking_id = (int) $wpdb->insert_id;
	$booking = ehdb_get_booking( $booking_id );
	if ( $booking ) {
		ehdb_send_confirmation_email( $booking );
		ehdb_send_admin_notification( $booking );
		ehdb_schedule_booking_emails( $booking );
	}

	return rest_ensure_response(
		[
			'success' => true,
			'message' => $settings['success_message'],
			'booking_id' => $booking_id,
		]
	);
}

function ehdb_get_booking( $booking_id ) {
	global $wpdb;
	$item = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM " . ehdb_table_bookings() . " WHERE id = %d", $booking_id ), ARRAY_A );
	return $item ?: null;
}

function ehdb_month_availability( $month ) {
	$settings = ehdb_get_settings();
	$tz = new DateTimeZone( $settings['timezone'] );
	$start = DateTimeImmutable::createFromFormat( 'Y-m-d H:i:s', $month . '-01 00:00:00', $tz );
	if ( ! $start ) {
		return [];
	}
	$end = $start->modify( 'last day of this month' );
	$now = new DateTimeImmutable( 'now', $tz );
	$window_end = $now->modify( '+' . ( (int) $settings['booking_window_days'] - 1 ) . ' days' )->setTime( 23, 59, 59 );
	$blocked = array_fill_keys( $settings['blocked_dates'], true );
	$counts = ehdb_booked_slot_counts( $start->format( 'Y-m-d' ), $end->format( 'Y-m-d' ) );
	$availability = [];

	for ( $cursor = $start; $cursor <= $end; $cursor = $cursor->modify( '+1 day' ) ) {
		$date = $cursor->format( 'Y-m-d' );
		$weekday = $cursor->format( 'w' );
		if ( $cursor < $now->setTime( 0, 0, 0 ) ) {
			continue;
		}
		if ( $cursor > $window_end ) {
			continue;
		}
		if ( ! in_array( $weekday, $settings['working_days'], true ) ) {
			continue;
		}
		if ( isset( $blocked[ $date ] ) ) {
			continue;
		}

		$slots = [];
		foreach ( $settings['time_slots'] as $slot ) {
			if ( ! preg_match( '/^\d{2}:\d{2}$/', $slot ) ) {
				continue;
			}
			$slot_dt = DateTimeImmutable::createFromFormat( 'Y-m-d H:i', $date . ' ' . $slot, $tz );
			if ( ! $slot_dt ) {
				continue;
			}
			if ( $slot_dt < $now->modify( '+' . (int) $settings['min_notice_hours'] . ' hours' ) ) {
				continue;
			}
			$booked_count = (int) ( $counts[ $date ][ $slot ] ?? 0 );
			if ( $booked_count >= (int) $settings['per_slot_capacity'] ) {
				continue;
			}
			$slots[] = [
				'value' => $slot,
				'label' => wp_date( 'g:i A', $slot_dt->getTimestamp(), $tz ),
			];
		}

		if ( $slots ) {
			$availability[ $date ] = $slots;
		}
	}

	return $availability;
}

function ehdb_booked_slot_counts( $start_date, $end_date ) {
	global $wpdb;
	$rows = $wpdb->get_results(
		$wpdb->prepare(
			"SELECT booking_date, booking_time, COUNT(*) AS total FROM " . ehdb_table_bookings() . " WHERE booking_date BETWEEN %s AND %s AND status != 'cancelled' GROUP BY booking_date, booking_time",
			$start_date,
			$end_date
		),
		ARRAY_A
	);
	$counts = [];
	foreach ( $rows as $row ) {
		$date = $row['booking_date'];
		$time = substr( $row['booking_time'], 0, 5 );
		$counts[ $date ][ $time ] = (int) $row['total'];
	}
	return $counts;
}

function ehdb_is_slot_available( $date, $time ) {
	$availability = ehdb_month_availability( substr( $date, 0, 7 ) );
	if ( empty( $availability[ $date ] ) ) {
		return false;
	}
	foreach ( $availability[ $date ] as $slot ) {
		if ( $slot['value'] === $time ) {
			return true;
		}
	}
	return false;
}

function ehdb_schedule_booking_emails( array $booking ) {
	$settings = ehdb_get_settings();
	$timestamp = ehdb_booking_timestamp( $booking );
	if ( ! $timestamp ) {
		return;
	}
	if ( '1' === $settings['reminder_enabled'] ) {
		$reminder = $timestamp - ( (int) $settings['reminder_hours_before'] * HOUR_IN_SECONDS );
		if ( $reminder > time() ) {
			wp_schedule_single_event( $reminder, EHDB_CRON_REMINDER, [ (int) $booking['id'] ] );
		}
	}
	if ( '1' === $settings['followup_enabled'] ) {
		$followup = $timestamp + ( (int) $settings['followup_hours_after'] * HOUR_IN_SECONDS );
		if ( $followup > time() ) {
			wp_schedule_single_event( $followup, EHDB_CRON_FOLLOWUP, [ (int) $booking['id'] ] );
		}
	}
}

function ehdb_booking_timestamp( array $booking ) {
	try {
		$tz = new DateTimeZone( $booking['timezone'] );
		$dt = new DateTimeImmutable( $booking['booking_date'] . ' ' . substr( $booking['booking_time'], 0, 5 ), $tz );
		return $dt->getTimestamp();
	} catch ( Exception $exception ) {
		return null;
	}
}

function ehdb_token_map( array $booking ) {
	$settings = ehdb_get_settings();
	$timestamp = ehdb_booking_timestamp( $booking );
	$booking_date = $booking['booking_date'];
	$booking_time = substr( $booking['booking_time'], 0, 5 );
	if ( $timestamp ) {
		$booking_date = wp_date( 'F j, Y', $timestamp, new DateTimeZone( $booking['timezone'] ) );
		$booking_time = wp_date( 'g:i A', $timestamp, new DateTimeZone( $booking['timezone'] ) );
	}
	return [
		'{name}' => $booking['name'],
		'{email}' => $booking['email'],
		'{company}' => $booking['company'],
		'{phone}' => $booking['phone'],
		'{notes}' => $booking['notes'] ?: 'No additional notes',
		'{booking_date}' => $booking_date,
		'{booking_time}' => $booking_time,
		'{meeting_title}' => $settings['meeting_title'],
		'{meeting_duration}' => (string) $settings['meeting_duration'],
		'{meeting_location}' => $settings['meeting_location'],
		'{meeting_url}' => $settings['meeting_url'],
		'{admin_url}' => admin_url( 'admin.php?page=ehdb-bookings' ),
	];
}

function ehdb_send_html_mail( $to, $subject, $body, $attachments = [] ) {
	$headers = [ 'Content-Type: text/html; charset=UTF-8' ];
	return wp_mail( $to, $subject, $body, $headers, $attachments );
}

function ehdb_send_confirmation_email( array $booking ) {
	$settings = ehdb_get_settings();
	$tokens = ehdb_token_map( $booking );
	$subject = strtr( $settings['confirmation_subject'], $tokens );
	$body = strtr( $settings['confirmation_body'], $tokens );
	$attachments = [];
	$ics = ehdb_generate_ics_file( $booking );
	if ( $ics ) {
		$attachments[] = $ics;
	}
	ehdb_send_html_mail( $booking['email'], $subject, $body, $attachments );
	if ( $ics && file_exists( $ics ) ) {
		unlink( $ics );
	}
}

function ehdb_send_admin_notification( array $booking ) {
	$settings = ehdb_get_settings();
	$tokens = ehdb_token_map( $booking );
	$subject = strtr( $settings['admin_subject'], $tokens );
	$body = strtr( $settings['admin_body'], $tokens );
	ehdb_send_html_mail( $settings['admin_emails'], $subject, $body );
}

function ehdb_send_reminder_email( $booking_id ) {
	$booking = ehdb_get_booking( (int) $booking_id );
	if ( ! $booking || in_array( $booking['status'], [ 'cancelled', 'no_show' ], true ) ) {
		return;
	}
	$settings = ehdb_get_settings();
	$tokens = ehdb_token_map( $booking );
	ehdb_send_html_mail( $booking['email'], strtr( $settings['reminder_subject'], $tokens ), strtr( $settings['reminder_body'], $tokens ) );
}

function ehdb_send_followup_email( $booking_id ) {
	$booking = ehdb_get_booking( (int) $booking_id );
	if ( ! $booking || 'cancelled' === $booking['status'] ) {
		return;
	}
	$settings = ehdb_get_settings();
	$tokens = ehdb_token_map( $booking );
	ehdb_send_html_mail( $booking['email'], strtr( $settings['followup_subject'], $tokens ), strtr( $settings['followup_body'], $tokens ) );
}

function ehdb_generate_ics_file( array $booking ) {
	$settings = ehdb_get_settings();
	$timestamp = ehdb_booking_timestamp( $booking );
	if ( ! $timestamp ) {
		return null;
	}
	$end = $timestamp + ( (int) $booking['duration_minutes'] * MINUTE_IN_SECONDS );
	$upload_dir = wp_upload_dir();
	$dir = trailingslashit( $upload_dir['basedir'] ) . 'eventhex-demo-bookings';
	if ( ! wp_mkdir_p( $dir ) ) {
		return null;
	}
	$file = trailingslashit( $dir ) . 'booking-' . (int) $booking['id'] . '.ics';
	$uid = 'ehdb-' . (int) $booking['id'] . '@eventhex.ai';
	$ics = implode(
		"\r\n",
		[
			'BEGIN:VCALENDAR',
			'VERSION:2.0',
			'PRODID:-//EventHex//Demo Bookings//EN',
			'BEGIN:VEVENT',
			'UID:' . $uid,
			'DTSTAMP:' . gmdate( 'Ymd\THis\Z' ),
			'DTSTART:' . gmdate( 'Ymd\THis\Z', $timestamp ),
			'DTEND:' . gmdate( 'Ymd\THis\Z', $end ),
			'SUMMARY:' . ehdb_escape_ics( $settings['meeting_title'] ),
			'DESCRIPTION:' . ehdb_escape_ics( 'EventHex demo with ' . $booking['name'] . ' from ' . $booking['company'] ),
			'LOCATION:' . ehdb_escape_ics( $settings['meeting_location'] ),
			'URL:' . ehdb_escape_ics( $settings['meeting_url'] ),
			'END:VEVENT',
			'END:VCALENDAR',
			'',
		]
	);
	file_put_contents( $file, $ics );
	return $file;
}

function ehdb_escape_ics( $value ) {
	$value = str_replace( [ '\\', ';', ',', "\n", "\r" ], [ '\\\\', '\\;', '\\,', '\\n', '' ], (string) $value );
	return $value;
}
