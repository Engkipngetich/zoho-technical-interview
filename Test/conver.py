#currency converter from KES to USD, GBP, EUR
def convert_currency_KES(amount, target_currency):
    exchange_rates = {
        'USD': 0.0091,  # exchange rate for KES to USD
        'GBP': 0.0066,  # exchange rate for KES to GBP
        'EUR': 0.0077   # exchange rate for KES to EUR
    }
    
    if target_currency in exchange_rates:
        converted_amount = amount * exchange_rates[target_currency]
        return converted_amount
    else:
        raise ValueError("Unsupported target currency. Supported currencies are: USD, GBP, EUR.")

def convert_currency_USD(amount, target_currency):
    exchange_rates = {
        'KES': 110.0,  # exchange rate for USD to KES
        'GBP': 0.73,   # exchange rate for USD to GBP
        'EUR': 0.85    # exchange rate for USD to EUR
    }
    
    if target_currency in exchange_rates:
        converted_amount = amount * exchange_rates[target_currency]
        return converted_amount
    else:
        raise ValueError("Unsupported target currency. Supported currencies are: KES, GBP, EUR.")