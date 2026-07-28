import subprocess
import os

# Caminho da sua pasta
pasta = r"C:\Arquivos\Projetos\Aulas"

# Abre o VS Code já nessa pasta
subprocess.Popen(["code", pasta], shell=True)