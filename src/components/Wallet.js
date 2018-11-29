import React, { Component } from 'react';
import { Wallet, util } from "oip-hdmw";
import '../styles/Wallet.css';

class WalletComponent extends Component {
    constructor(props) {
        super(props);
        let wal;
        let mnemonic = undefined;
        this.state = {
            wallet: undefined,
            mnemonic: '',
            floExplorer: undefined,

        };

        this.getWalletFromMnemonic = this.getWalletFromMnemonic.bind(this);
        this.createNewWallet = this.createNewWallet.bind(this);
    }

    componentDidMount() {
        console.log("START")
    }

    getWalletFromMnemonic(mnemonic) {
        if (util.isMnemonic(mnemonic)) {
            this.wal = new Wallet(mnemonic, {
                discover: false,
                supported_coins: ['bitcoin', 'litecoin', 'flo', 'flo_testnet']
            })
            this.setState({ wallet: this.wal, mnemonic: this.wal.getMnenomic() });
        }
    }

    createNewWallet() {
        this.wal = new Wallet();
        this.setState({ wallet: this.wal, mnemonic: this.wal.getMnenomic() });
    }

    handleInputMnemonicChange(event) {
        this.inputMnenomic = event.target.value;
    }

    handleSubmit(event){
        event.preventDefault();

    }

    render() {
        return (
            <div className="Wallet">
                <div className="sidenav">
                    <button className="btn overview">
                        Overview
                    </button>
                    <button className="btn send_rc">
                        Make Transactions
                    </button>
                    <button className="btn tx">
                        Transactions History
                    </button>
                    <label>
                        <input type="text" inputMnemonic={this.inputMnemonic} onChange={this.handleInputMnemonicChange} placeholder={"Enter your mnemonic"} />
                    </label>
                    <button className="btn generateMnemonic" onClick={this.createNewWallet()}/>
                </div>
            </div>
        );
    }
}

export default WalletComponent;