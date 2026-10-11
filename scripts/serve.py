#!/usr/bin/env python3
"""Lokaler Testserver für www/: python3 scripts/serve.py [Port]

Wie `python3 -m http.server`, verbietet dem Browser aber das Zwischenspeichern – sonst zeigt er nach
Änderungen an den Dateien beim Neuladen weiter die alte Fassung.
"""
import os, sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8642
www = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'www')
print(f'http://127.0.0.1:{port}/', flush=True)
ThreadingHTTPServer(('127.0.0.1', port), partial(Handler, directory=www)).serve_forever()
