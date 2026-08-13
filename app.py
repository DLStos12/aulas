import subprocess
import os
import webbrowser

# Caminho da sua pasta
pasta = r"C:\Arquivos\Projetos\Aulas"

# Abre o VS Code já nessa pasta
subprocess.Popen(["code", pasta], shell=True)

webbrowser.open("https://dlstos12.github.io/aulas/")