from booking.booking import Booking

with Booking(gg=False) as bot:
    bot.land_first_page()
    # bot.change_currency()
    bot.select_to_go('New York')
    bot.select_date("2022-05-17", "2022-06-18")
    print(" exiting ...")
# context manager

# once Python reaches

# the line outside of the indentation

# then it is going to execute
# some tear down actions
