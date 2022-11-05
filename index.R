library(rjson)
library(jsonlite)
library(transitions)

#if (!require("ipumsr")) stop("Reading IPUMS data into R requires the ipumsr package. It can be installed using the following command: install.packages('ipumsr')")

#ddi <- read_ipums_ddi("data/atus_00026(1).xml")
#data <- read_ipums_micro(ddi)


# data is row -> column
data <- fromJSON("data/transitions_data.txt")

names <- c('Sleep', 'PCare', 'Housework', 'CC',
           'AC', 'Work', 'Shop', 'TV',
           'Eating', 'Leisure', 'Travel and Other')

transitions(toJSON(data), toJSON(names))
