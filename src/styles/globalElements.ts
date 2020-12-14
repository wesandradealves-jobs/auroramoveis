import styled, { css } from 'styled-components';

interface ILayouts {
    flex?: string;
}

export const PaymentMethod = styled.span`
    display: inline-block;
    font: normal normal normal 14px/1 PaymentFont;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: middle;
    padding: 10px;
    &.pf-lg {
        font-size: 1.33333333em;
        line-height: 0.75em;
        vertical-align: -15%;
    }
    &.pf-2x {
     font-size: 2em;
    }
    &.pf-3x {
     font-size: 3em;
    }
    &.pf-4x {
     font-size: 4em;
    }
    &.pf-5x {
     font-size: 5em;
    }
    &.pf-amazon:before {
     content: "\f000";
    }
    &.pf-american-express:before {
     content: "\f001";
    }
    &.pf-american-express-alt:before {
     content: "\f002";
    }
    &.pf-atm:before {
     content: "\f003";
    }
    &.pf-bankomat:before {
     content: "\f004";
    }
    &.pf-bank-transfer:before {
     content: "\f005";
    }
    &.pf-bitcoin:before {
     content: "\f006";
    }
    &.pf-bitcoin-sign:before {
     content: "\f007";
    }
    &.pf-braintree:before {
     content: "\f008";
    }
    &.pf-btc:before {
     content: "\f009";
    }
    &.pf-card:before {
     content: "\f00a";
    }
    &.pf-carta-si:before {
     content: "\f00b";
    }
    &.pf-cash:before {
     content: "\f00c";
    }
    &.pf-cash-on-delivery:before {
     content: "\f00d";
    }
    &.pf-cb:before {
     content: "\f00e";
    }
    &.pf-cirrus:before {
     content: "\f00f";
    }
    &.pf-cirrus-alt:before {
     content: "\f010";
    }
    &.pf-clickandbuy:before {
     content: "\f011";
    }
    &.pf-credit-card:before {
     content: "\f012";
    }
    &.pf-diners:before {
     content: "\f013";
    }
    &.pf-discover:before {
     content: "\f014";
    }
    &.pf-ec:before {
     content: "\f015";
    }
    &.pf-eps:before {
     content: "\f016";
    }
    &.pf-eur:before {
     content: "\f017";
    }
    &.pf-facture:before {
     content: "\f018";
    }
    &.pf-fattura:before {
     content: "\f019";
    }
    &.pf-flattr:before {
     content: "\f01a";
    }
    &.pf-giropay:before {
     content: "\f01b";
    }
    &.pf-google-wallet:before {
     content: "\f01c";
    }
    &.pf-google-wallet-alt:before {
     content: "\f01d";
    }
    &.pf-gpb:before {
     content: "\f01e";
    }
    &.pf-gratipay:before {
     content: "\f01f";
    }
    &.pf-ideal:before {
     content: "\f020";
    }
    &.pf-ils:before {
     content: "\f021";
    }
    &.pf-inr:before {
     content: "\f022";
    }
    &.pf-invoice:before {
     content: "\f023";
    }
    &.pf-invoice-sign:before {
     content: "\f024";
    }
    &.pf-invoice-sign-alt:before {
     content: "\f025";
    }
    &.pf-invoice-sign-alt-o:before {
     content: "\f026";
    }
    &.pf-invoice-sign-o:before {
     content: "\f027";
    }
    &.pf-jcb:before {
     content: "\f028";
    }
    &.pf-jpy:before {
     content: "\f029";
    }
    &.pf-krw:before {
     content: "\f02a";
    }
    &.pf-maestro:before {
     content: "\f02b";
    }
    &.pf-maestro-alt:before {
     content: "\f02c";
    }
    &.pf-mastercard:before {
     content: "\f02d";
    }
    &.pf-mastercard-alt:before {
     content: "\f02e";
    }
    &.pf-mastercard-securecode:before {
     content: "\f02f";
    }
    &.pf-ogone:before {
     content: "\f030";
    }
    &.pf-paybox:before {
     content: "\f031";
    }
    &.pf-paylife:before {
     content: "\f032";
    }
    &.pf-paypal:before {
     content: "\f033";
    }
    &.pf-paypal-alt:before {
     content: "\f034";
    }
    &.pf-paysafecard:before {
     content: "\f035";
    }
    &.pf-postepay:before {
     content: "\f036";
    }
    &.pf-quick:before {
     content: "\f037";
    }
    &.pf-rechnung:before {
     content: "\f038";
    }
    &.pf-ripple:before {
     content: "\f039";
    }
    &.pf-rub:before {
     content: "\f03a";
    }
    &.pf-skrill:before {
     content: "\f03b";
    }
    &.pf-sofort:before {
     content: "\f03c";
    }
    &.pf-square:before {
     content: "\f03d";
    }
    &.pf-stripe:before {
     content: "\f03e";
    }
    &.pf-truste:before {
     content: "\f03f";
    }
    &.pf-try:before {
     content: "\f040";
    }
    &.pf-unionpay:before {
     content: "\f041";
    }
    &.pf-usd:before {
     content: "\f042";
    }
    &.pf-verified-by-visa:before {
     content: "\f043";
    }
    &.pf-verisign:before {
     content: "\f044";
    }
    &.pf-visa:before {
     content: "\f045";
    }
    &.pf-visa-electron:before {
     content: "\f046";
    }
    &.pf-western-union:before {
     content: "\f047";
    }
    &.pf-western-union-alt:before {
     content: "\f048";
    }
    &.pf-wirecard:before {
     content: "\f049";
    }
    &.pf-sepa:before {
     content: "\f04a";
    }
    &.pf-sepa-alt:before {
     content: "\f04b";
    }
    &.pf-apple-pay:before {
     content: "\f04c";
    }
    &.pf-interac:before {
     content: "\f04d";
    }
    &.pf-paymill:before {
     content: "\f04e";
    }
    &.pf-dankort:before {
     content: "\f04f";
    }
    &.pf-bancontact-mister-cash:before {
     content: "\f050";
    }
    &.pf-moip:before {
     content: "\f051";
    }
    &.pf-pagseguro:before {
     content: "\f052";
    }
    &.pf-cash-on-pickup:before {
     content: "\f053";
    }
    &.pf-sage:before {
     content: "\f054";
    }
    &.pf-elo:before {
     content: "\f055";
    }
    &.pf-elo-alt:before {
     content: "\f056";
    }
    &.pf-payu:before {
     content: "\f057";
    }
    &.pf-mercado-pago:before {
     content: "\f058";
    }
    &.pf-mercado-pago-sign:before {
     content: "\f059";
    }
    &.pf-payshop:before {
     content: "\f05a";
    }
    &.pf-multibanco:before {
     content: "\f05b";
    }
    &.pf-gratipay-sign:before {
     content: "\f05c";
    }
    &.pf-six:before {
     content: "\f05d";
    }
    &.pf-cashcloud:before {
     content: "\f05e";
    }
    &.pf-interac-alt:before {
     content: "\f05f";
    }
    &.pf-klarna:before {
     content: "\f060";
    }
    &.pf-bitpay:before {
     content: "\f061";
    }
    &.pf-venmo:before {
     content: "\f062";
    }
    &.pf-visa-debit:before {
     content: "\f063";
    }
    &.pf-alipay:before {
     content: "\f064";
    }
    &.pf-diners-alt:before {
     content: "\f065";
    }
    &.pf-hipercard:before {
     content: "\f066";
    }
    &.pf-skrill-alt:before {
     content: "\f067";
    }
    &.pf-shopify:before {
     content: "\f068";
    }
    &.pf-direct-debit:before {
     content: "\f069";
    }
    &.pf-sodexo:before {
     content: "\f06a";
    }
    &.pf-bpay:before {
     content: "\f06b";
    }
    &.pf-contactless:before {
     content: "\f06c";
    }
    &.pf-contactless-alt:before {
     content: "\f06d";
    }
    &.pf-eth:before {
     content: "\f06e";
    }
    &.pf-ltc:before {
     content: "\f06f";
    }
    &.pf-visa-pay:before {
     content: "\f070";
    }
    &.pf-wechat-pay:before {
     content: "\f071";
    }
    &.pf-amazon-pay:before {
     content: "\f072";
    }
    &.pf-amazon-pay-alt:before {
     content: "\f073";
    }        
`;

export const PaymentMethods = styled.div`
    margin: 0 -10px -10px;
`;

export const TextContent = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    text-align: initial;
    color: gray;
    font-weight: 300;
`;

export const PageTitle = styled.h2`
    font-weight: 300;
    font-size: 1.8rem;
    margin-bottom: 30px;
    display: block;
    color: #8b05be;
    &::after {
        content: '';
        display: block;
        height: 2px;
        background: #8b05be;
        margin: 4px 0 12px;
        width: 40px;
        opacity: .1;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;
    margin: 0 -25px -25px;
`;

export const Column = styled.div<ILayouts>`
    flex: ${({ flex }) => (flex ? `0 0 ${flex}` : '1')};
    padding: 0 25px 25px;
`;