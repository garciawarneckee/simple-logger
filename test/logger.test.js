const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const moment = require('moment');
const path = require('path');

chai.use(sinonChai);
const expect = chai.expect;

const Logger = require("../lib/logger");
const now = moment().format('LT');

describe("Simple Logger", ()=> {

    describe("Log to console", () => {
        
        beforeEach( () => {  sinon.spy(console, 'log'); } )

        afterEach( () => { console.log.restore(); } )

        it("Log info message with format", () => {
            Logger.info("An info message");
            expect(console.log).to.be.called;
        });

    })

});