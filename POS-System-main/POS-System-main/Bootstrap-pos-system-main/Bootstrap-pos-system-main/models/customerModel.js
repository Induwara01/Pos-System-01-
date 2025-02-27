export default class CustomerModel {
    constructor(cusId, cusName, cusAddress, cusAge, cusContact) {
        this._cusId = cusId;
        this._cusName = cusName;
        this._cusAddress = cusAddress;
        this._cusAge = cusAge;
        this._cusContact = cusContact;
    }

    get cusId() {
        return this._cusId;
    }

    set cusId(value) {
        this._cusId = value;
    }

    get cusName() {
        return this._cusName;
    }

    set cusName(value) {
        this._cusName = value;
    }

    get cusAddress() {
        return this._cusAddress;
    }

    set cusAddress(value) {
        this._cusAddress = value;
    }

    get cusAge() {
        return this._cusAge;
    }

    set cusAge(value) {
        this._cusAge = value;
    }

    get cusContact() {
        return this._cusContact;
    }

    set cusContact(value) {
        this._cusContact = value;
    }
}