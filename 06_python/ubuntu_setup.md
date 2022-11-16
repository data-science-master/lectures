1. Install pip3 (which should automatically install python3)
   ``` bash
   sudo apt-get install python3-pip
   ```
2. Use pip3 to install useful packages
   ``` bash
   pip3 install 
      pandas \
      fastparquet \
      pyarrow \
      tables \
      plotly \
      seaborn \
      xlrd
   ```
3. Install JupyterLab
   ``` bash
   pip3 install jupyterlab
   ```
4. Add user-level `bin` directy to `PATH`
   ``` bash
   export PATH=$PATH:~/.local/bin
   ```
5. Restart computer
6. Install JupyterLab Extensions
   ``` bash
   jupyter labextension install \
      @jupyterlab/toc \
      jupyterlab-chart-editor \
      jupyterlab-spreadsheet
   ```
7. You should now be able to run JupyterLab with Python3 kernel via
   ``` bash
   jupyter lab
   ```

If you want to run the R kernel in JupyterLab:

1. Install the IRkernel in R:
   ``` r
   install.packages('IRkernel')
   ```
2. Run the following in R using sudo
   ``` r
   IRkernel::installspec(user = FALSE)
   ```
3. If that doesn't work, try aliasing sudo to take your local path:
   ``` bash
   alias sudo='sudo -E env "PATH=$PATH"'
   ```
   then rerun 2.

If you want to run the Julia kernel in JupyterLab:

1. Install julia
   ``` bash
   sudo apt-get install julia
   ```
2. Install IJulia inside julia
   ``` julia
   import Pkg; Pkg.add("IJulia")
   ```
3. Run in julia:
   ``` julia
   using IJulia
   jupyterlab()
   ```

