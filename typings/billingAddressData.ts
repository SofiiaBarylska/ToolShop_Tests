import {faker} from '@faker-js/faker';

export interface BillingAddressData {
 street: string;
 city: string;
 state: string;
 country: string;
 postCode: string;
}

export const BILLING_ADDRESS: BillingAddressData = {
 street: faker.location.street(),
 city: faker.location.city(),
 state: faker.location.state(),
 country: faker.location.country(),
 postCode: faker.location.zipCode(),
};