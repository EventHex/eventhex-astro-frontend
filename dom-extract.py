import urllib.request
from html.parser import HTMLParser

class SpkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.recording = False
        self.div_level = 0
        self.html = []
        
    def handle_starttag(self, tag, attrs):
        is_spk = False
        for attr in attrs:
            if attr[0] == 'class' and attr[1] and 'spk' in attr[1]:
                is_spk = True
            if attr[0] == 'id' and attr[1] == 'spk-bento' and is_spk:
                self.recording = True
                self.div_level = 0

        if self.recording:
            if tag == 'div':
                self.div_level += 1
            attr_str = "".join([f' {k}="{v}"' if v is not None else f' {k}' for k, v in attrs])
            self.html.append(f"<{tag}{attr_str}>")

    def handle_endtag(self, tag):
        if self.recording:
            self.html.append(f"</{tag}>")
            if tag == 'div':
                self.div_level -= 1
                if self.div_level == 0:
                    self.recording = False

    def handle_data(self, data):
        if self.recording:
            self.html.append(data)
            
    def handle_entityref(self, name):
        if self.recording:
            self.html.append(f"&{name};")
            
    def handle_charref(self, name):
        if self.recording:
            self.html.append(f"&#{name};")

req = urllib.request.Request('https://eventhex.ai/speaker-management/', headers={'User-Agent': 'Mozilla/5.0'})
try:
    full_html = urllib.request.urlopen(req).read().decode('utf-8')
    p = SpkParser()
    p.feed(full_html)
    
    raw_html = "".join(p.html)
    raw_html = raw_html.replace('\\u2014', '—') # Fix literal unicode in JS string from PHP serialize
    
    print("Parsed HTML length:", len(raw_html))
    
    req_css = urllib.request.Request('https://eventhex.ai/wp-content/cache/min/1/wp-content/novamira-sandbox/eventhex-bento-widget/assets/bento-grid.css?ver=1774963694', headers={'User-Agent': 'Mozilla/5.0'})
    css = urllib.request.urlopen(req_css).read().decode('utf-8')
    
    base_css = """
  .sm-bento-section {
    width: 100%;
    margin: 0;
    padding: 80px 0;
    background: url('https://eventhex.ai/wp-content/uploads/2025/03/Bg.svg') center / cover no-repeat;
  }
"""
    
    with open('src/components/speaker-management/BentoGrid.astro', 'w') as out:
        out.write('---\n// Section 3: Bento Grid — Full parity with native WordPress widget styling\n---\n\n<section class="sm-bento-section">\n')
        out.write(raw_html)
        out.write('\n</section>\n\n<script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const tabs = document.querySelectorAll(".spk-tab");\n    const panels = document.querySelectorAll(".spk-panel");\n    \n    tabs.forEach(tab => {\n      tab.addEventListener("click", () => {\n        const index = tab.getAttribute("data-tab");\n        \n        tabs.forEach(t => t.classList.remove("spk-tab--active"));\n        panels.forEach(p => p.classList.remove("spk-panel--active"));\n        \n        tab.classList.add("spk-tab--active");\n        const panel = document.querySelector(`.spk-panel[data-tab="${index}"]`);\n        if (panel) panel.classList.add("spk-panel--active");\n      });\n    });\n  });\n</script>\n\n<style is:global>\n')
        out.write(base_css)
        out.write('\n/* CUSTOM WIDGET CSS */\n')
        out.write(css)
        out.write('\n</style>\n')
        
    print("DONE extracting exact DOM.")
except Exception as e:
    import traceback
    traceback.print_exc()
