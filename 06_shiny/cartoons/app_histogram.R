library(shiny)

ui <- fluidPage(
    varSelectInput("var", "Which Variable?", data = mtcars),
    plotOutput("plot")
)

library(ggplot2)
server <- function(input, output) {
    output$plot <- renderPlot({
        ggplot(mtcars, aes(x = !!input$var)) +
            geom_histogram(bins = 20)
    })
}

shinyApp(ui = ui, server = server)
