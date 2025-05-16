import { Page } from "@playwright/test";
import { ProductListPage } from "../productList.page";
import { LoginPage } from "../login.page";
import { ProductPage } from "../product.page";
import { Cart } from "../cart.page";
import { ProductFiltersFragment } from "../fragments/productsFiltersFragment";
import { HeaderFragment } from "../fragments/headerFragment";
import { SignIn } from "../checkout/signIn.step";
import { BillingAddress } from "../checkout/billingAddress.step";
import { PaymentStep } from "../checkout/payment.step";





export class AppManager {
    page: Page;
    productListPage: ProductListPage;
    loginPage: LoginPage;
    productPage: ProductPage;
    cart: Cart; 
    filters: ProductFiltersFragment;
    header: HeaderFragment;
    signIn: SignIn;
    billingAddress: BillingAddress;
    paymentStep: PaymentStep;
    
    constructor(page: Page) {
        this.page = page;
        this.productListPage = new ProductListPage(page);
        this.productPage = new ProductPage(page);
        this.loginPage = new LoginPage(page);
        this.cart = new Cart(page);
        this.filters = new ProductFiltersFragment(page);
        this.header = new HeaderFragment(page);
        this.signIn = new SignIn(page);
        this.billingAddress = new BillingAddress(page);
        this.paymentStep = new PaymentStep (page);
        
    }
};