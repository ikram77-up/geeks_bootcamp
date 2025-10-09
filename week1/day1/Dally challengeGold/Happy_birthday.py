from datetime import datetime

birthdate = input("Please enter your birthdate (format: DD/MM/YYYY): ")
birth_date = datetime.strptime(birthdate, "%d/%m/%Y")
today = datetime.today()

age = today.year - birth_date.year
if (today.month, today.day) < (birth_date.month, birth_date.day):
    age -= 1

last_digit = age % 10
candles = 'i' * last_digit if last_digit != 0 else 'i'  # au moins 1 bougie
year = birth_date.year
is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
cake = f"""
       ___{candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""


print(f"\nYou are {age} years old!")
print(cake)

if is_leap:
    print("You were born in a leap year! You get another cake! 🎉")
    print(cake)
