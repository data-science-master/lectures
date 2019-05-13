diff <- schizo$diff


sig <- sd(diff)
nsamp <- length(diff)


tibble(diff = rnorm(n = nsamp, mean = 0, sd = sig)) %>%
  ggplot(aes(x = 0, y = diff)) +
  geom_boxplot() +
  geom_jitter() +
  theme_void() +
  ylim(-0.7, 0.7) +
  geom_hline(yintercept = 0, lty = 2) -> pl
ggsave(filename = "./cartoons/boxplot2.pdf", plot = pl, height = 4, width = 0.5)

tibble(x = seq(-4, 4, length = 100)) %>%
  mutate(y = dt(x, df = 14),
         color = x > 3.23) ->
  temp

ggplot(temp, aes(x = x, y = y, fill = color)) +
  geom_area(color = "black") +
  theme_void() +
  geom_vline(xintercept = 3.23, lty = 2) +
  scale_fill_manual(values = c("white", "blue")) +
  theme(legend.position = "none") ->
  pl

ggsave(filename = "./cartoons/density.pdf", plot = pl)




##### Finches
library(Sleuth3)
data("case0201")
case0201 %>%
  mutate(Year = as.factor(Year)) ->
  finch

ggplot(finch, aes(x = Year, y = Depth)) +
  geom_boxplot(coef = Inf) +
  geom_jitter(alpha = 1/3) +
  theme_classic() +
  ylim(5, 13) +
  theme(axis.text = element_blank(),
        axis.ticks = element_blank(),
        axis.title = element_blank()) -> pl
ggsave(file = "./cartoons/finch0.pdf", pl)


temp <- tibble(Year = finch$Year,
               Depth = rnorm(n = length(finch$Depth), mean = mean(finch$Depth), sd = sd(finch$Depth)))
ggplot(temp, aes(x = Year, y = Depth)) +
  geom_boxplot(coef = Inf) +
  geom_jitter(alpha = 1/3) +
  theme_classic() +
  ylim(5, 13) +
  theme(axis.text = element_blank(),
        axis.ticks = element_blank(),
        axis.title = element_blank()) -> pl
ggsave(file = "./cartoons/finch5.pdf", pl)





