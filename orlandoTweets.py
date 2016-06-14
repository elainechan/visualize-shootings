# from twitter import Twitter

# #Make sure to add the access tokens and consumer keys for your application
# t = Twitter(
# 	auth=OAuth(309601045-iPdFoNH2wN5QroBzEIVqUi76Nkq1TG0icICxBbtP, 2a4FoklQPVG8kKWzUuloaaX9C5L4vyKgcUgflRhEPpIf6, LYQ0xFONoG03STlQqsSsjVo44, cU4rnYb2Y0pYXBOPneghI4x1FNSkoxyNP6QVYM4uYBnmnEe2Fd)
# 	)

# orlandoTweets = t.search.tweets(q = "#orlando")

# print(orlandoTweets)

import twitter
api = twitter.Api(consumer_key=[LYQ0xFONoG03STlQqsSsjVo44],
                  consumer_secret=[cU4rnYb2Y0pYXBOPneghI4x1FNSkoxyNP6QVYM4uYBnmnEe2Fd],
                  access_token_key=[309601045-iPdFoNH2wN5QroBzEIVqUi76Nkq1TG0icICxBbtP],
                  access_token_secret=[2a4FoklQPVG8kKWzUuloaaX9C5L4vyKgcUgflRhEPpIf6])

orlandoTweets = api.search.tweets(q = "#orlando")

print(orlandoTweets)