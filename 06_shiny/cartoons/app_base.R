library(shiny)

# Define UI for application
ui <- fluidPage(
    ## Stuff for defining user-interface
    ## e.g. Title,
    ##      Table of contents
    ##      Location of inputs (sliders and buttons)
)

# Define server logic
server <- function(input, output) {
    ## Stuff for running R code
    ## e.g. Run a linear model.
    ##      Manipulate a data frame
    ##      Make a plot.
}

# Run the application
shinyApp(ui = ui, server = server)
