# save as serve.py
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import mimetypes, pathlib

class HtmlByDefault(SimpleHTTPRequestHandler):
    def guess_type(self, path):
        # treat extensionless files as HTML
        if pathlib.Path(path).suffix == "":
            return "text/html; charset=utf-8"
        return super().guess_type(path)

ThreadingHTTPServer(("", 8080), HtmlByDefault).serve_forever()
