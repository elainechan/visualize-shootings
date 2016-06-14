setwd("/Users/Leo/Downloads/data")
shootings2016 <- read.csv("shootings2016.csv")
shootings2015 <- read.csv("shootings2015.csv")
shootings2014 <- read.csv("shootings2014.csv")

# combine data frames for 3 years of data
shootings <- rbind(shootings2016, shootings2015)
threeYear <- rbind(shootings, shootings2014)

# rename columns with weird symbols
names(threeYear)[5]<-"Killed"
names(threeYear)[6]<-"Injured"

# check and change date format
class(threeYear$Incident.Date)
threeYear$Incident.Date <- as.Date(threeYear$Incident.Date, format = "%B %d, %Y")

# drop "Operations" column
threeYear$Operations <- NULL

# export CSV
write.csv(threeYear, "shootings2014to2016.csv")

# import data frame
threeYear <- read.csv("shootings2014to2016.csv")

# plot data
library(ggplot2)
ggplot(threeYear, aes(x=Incident.Date, y=Killed)) + stat_identity(geom='bar', position='dodge', colour='black') + scale_fill_brewer(palette='Pastel1')