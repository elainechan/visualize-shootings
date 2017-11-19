library(plotly)
library(dplyr)
library(lubridate)

# Todo geo data:
# before `accumulate_by`: 
# use google map API to get lat long for each address

accumulate_by <- function(dat, var) { # What's going on in this function??
    var <- lazyeval::f_eval(var, dat)
    levels <- plotly:::getLevels(var)
    dats <- lapply(seq_along(levels), function(x) {
        cbind(dat[var %in% levels[seq(1, x)], ], frame = levels[[x]])
    })
    dplyr::bind_rows(dats)
}

fullset <- read.table('shootings2013to2017.csv', header = TRUE, sep = ',')
testdata <- fullset %>%
    mutate(date = mdy(Incident.Date))
    accumulate_by(~Incident.Date)
plot <- ggplot(testdata, aes(date, X..Injured)) + 
    geom_line(aes(group = State, ids = State, frame = frame))