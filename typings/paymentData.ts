import {faker} from '@faker-js/faker';

export enum PaymentMethod{
    BankTransfer = "Bank Transfer",
    CashOnDelivery = "Cash On Delivery",
    CreditCard = "Credit Card",
    BuyNowPayLater = "Buy Now Pay Later",
    GiftCard = "Gift Card",

}


export interface CreditCard {
 creditCardNumber: string;
 expirationDate: string;
 cvv: string;
 cardHolderName: string;
 
}

export const CREDIT_CARD: CreditCard = {
creditCardNumber: '1111-1111-1111-1111',
expirationDate: (() => {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    const month = (date.getMonth() +1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${month}/${year}`;
}) (),
cvv:'111',
cardHolderName: `${faker.person.firstName()} ${faker.person.lastName()}`.replace(/[^a-zA-Z]/g, ''),
};