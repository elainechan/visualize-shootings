library(dplyr)

nkilled <- fullset %>%
 rename(state = State) %>%
 group_by(state) %>%
 summarise(n = sum(X..Killed))

codes <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv")[c("code", "state")]

dat <- left_join(nkilled, codes, by = "state")


g <- list(
    scope = 'usa',
    projection = list(type = 'albers usa'),
    showlakes = TRUE,
    lakecolor = toRGB('white')
)

plot_geo(dat) %>%
  add_trace(
    locations = ~code, locationmode = "USA-states", 
    z = ~n, type = "choropleth"
  ) %>% 
  layout(
      title = "Number killed",
      geo = g
    )
    