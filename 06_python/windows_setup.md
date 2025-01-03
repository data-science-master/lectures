1. Install the latest version of Python via the Microsoft Store App.
2  Make sure that you Add Python to PATH if that option is available
during install.
3. Open the Windows PowerShell by searching for it in the "Type here
   to search" box.
4. In the Windows PowerShell, upgrade pip by running:
   ``` dos
   python -m pip install --upgrade pip
   ```
5. Install jupyterlab via running the following in Windows PowerShell:
   ``` dos
   pip install jupyterlab
   ```
6. You should now be able to run jupyterlab by running the following
   in Windows PowerShell:
   ``` dos
   python -m jupyterlab
   ```


I was able to add jupyter-lab to the PATH variable via:
1. Type `where python` to find the basic location of Python.
2. Search for the location of `jupyter.exe`.
3. Add this location to the PATH. For example, `jupyter.exe` was
   located in
   ```
   C:\Users\dgerard\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.8_qbz5n2kfra8p0\LocalCache\local-packages\Python38\Scripts
   ```
   So I added that to the path via (in PowerShell):
   ``` dos
   [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Users\dgerard\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.8_qbz5n2kfra8p0\LocalCache\local-packages\Python38\Scripts", [EnvironmentVariableTarget]::User)
   ```
4. Check it is now in the Path by running in PowerShell
   ``` dos
   jupyter --version
   ```
5. You should then be able to run jypterlab via the PowerShell with
   ``` dos
   jupyter-lab
   ```

Once you add jupyter-lab to the Path, you can then install the R
kernel via:
1. Install the IRkernel in R:
   ``` r
   install.packages('IRkernel')
   ```
2. Run the following in R using sudo
   ``` r
   IRkernel::installspec(user = FALSE)
   ```


But the above doesn't work for R... hmm



You can install jupyter-lab for windows subystem for linux by
following these commands:
https://medium.com/@sayanghosh_49221/jupyter-notebook-in-windows-subsystem-for-linux-wsl-f075f7ec8691

The trick, after install python3 and python3-pip, is to open up 
```
emacs ~/.bashrc
```
Then adding this to the PATH
```
alias jupyter-notebook="~/.local/bin/jupyter-notebook --no-browser"
```

You can now open up the location in your windows browser and it works!
