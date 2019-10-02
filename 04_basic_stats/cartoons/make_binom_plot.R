library(tidyverse)
library(ggthemes)
sizeval <- 12
dvec <- dbinom(x = 0:sizeval, size = sizeval, prob = 0.5)
tibble(x = 0:sizeval, prob = dvec) %>%
  mutate(is_col = dvec <= dvec[x == 9]) %>%
  ggplot(aes(x = x, xend = x, y = 0, yend = prob, color = is_col)) +
  geom_segment(lwd = 2, lineend = "round") +
  geom_vline(xintercept = 9, lty = 2, alpha = 1/2, lwd = 2) +
  scale_color_colorblind() +
  theme_classic() +
  theme(legend.position = "none",
        axis.ticks = element_blank(),
        axis.text = element_blank(),
        axis.title = element_blank(),
        axis.line.y = element_blank()) ->
pl

ggsave(filename = "binom_plot.pdf", plot = pl)
