// This file was automatically generated from templates.ander.soy.
// Please don't edit this file by hand.

goog.provide('bitex.templates');

goog.require('soy');


bitex.templates.CustomerDetailDialog = function(opt_data) {
  var output = '';
  /** @desc Customer username */
  var MSG_UNNAMED_1369 = goog.getMsg('Username:');
  output += '<div class="row"><div class="span6">' + MSG_UNNAMED_1369 + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</div></div>';
  return output;
};


bitex.templates.ErrorDialogContent = function(opt_data) {
  var output = '';
  /** @desc Error code label on error dialog content */
  var MSG_UNNAMED_1371 = goog.getMsg('Error code');
  output += '<p class="lead">' + soy.$$escapeHtml(opt_data.error_message) + '</p><dl class="dl-horizontal"><dt>' + MSG_UNNAMED_1371 + '</dt><dd>' + soy.$$escapeHtml(opt_data.error_code) + '</dd></dl>';
  return output;
};


bitex.templates.FileViewDialogContent = function(opt_data) {
  return '<img src="' + soy.$$escapeHtml(opt_data.filename) + '" style="width:500px"/>';
};


bitex.templates.DepositReceiptDialogContent = function(opt_data) {
  var output = '';
  /** @desc Download picture link on deposit receipt dialog content */
  var MSG_UNNAMED_1373 = goog.getMsg('Download');
  var receipt_urlList22 = opt_data.depositReceiptList;
  var receipt_urlListLen22 = receipt_urlList22.length;
  for (var receipt_urlIndex22 = 0; receipt_urlIndex22 < receipt_urlListLen22; receipt_urlIndex22++) {
    var receipt_urlData22 = receipt_urlList22[receipt_urlIndex22];
    output += '<img width="100%" src="' + soy.$$escapeHtml(receipt_urlData22) + '"/><a href="' + soy.$$escapeHtml(receipt_urlData22) + '" target="_blank">' + MSG_UNNAMED_1373 + '</a>';
  }
  return output;
};


bitex.templates.BrokerConfirmDepositContent = function(opt_data) {
  var output = '';
  /** @desc Control number label */
  var MSG_UNNAMED_1375 = goog.getMsg('Control number');
  /** @desc Amount label */
  var MSG_UNNAMED_1377 = goog.getMsg('Amount paid');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1379 = goog.getMsg('Fees:');
  /** @desc Net amount */
  var MSG_UNNAMED_1381 = goog.getMsg('Net amount');
  output += '<form class="form-horizontal broker-confirm-deposit"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1375 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.controlNumber) + '</label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1377 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.id_value) + '" type="text" class="input-small" size="16" name="PaidValue" value="' + soy.$$escapeHtml(opt_data.value) + '"></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1379 + '</label><div class="controls"><div class="row-fluid"><div class="span4"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div></div><div class="span4"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label broker-confirm-deposit-fee" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1381 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label></div></div></form>';
  return output;
};


bitex.templates.BrokerView = function(opt_data) {
  var output = '';
  if (opt_data.show_title) {
    /** @desc Title for the Broker view */
    var MSG_UNNAMED_1383 = goog.getMsg('My broker');
    output += '<div class="section-title"><h3>' + MSG_UNNAMED_1383 + '</h3></div>';
  }
  output += '<div class="content">';
  if (opt_data.msg_broker['BrokerID'] == -1) {
  } else {
    /** @desc Terms of service section subtitle on Broker view */
    var MSG_UNNAMED_1421 = goog.getMsg('Terms of service');
    output += '<address><strong>' + soy.$$escapeHtml(opt_data.msg_broker['BusinessName']) + '</strong><br/>' + soy.$$escapeHtml(opt_data.msg_broker['Address']) + '<br/>' + soy.$$escapeHtml(opt_data.msg_broker['City']) + ', ' + soy.$$escapeHtml(opt_data.msg_broker['State']) + ' ' + soy.$$escapeHtml(opt_data.msg_broker['ZipCode']) + ' - ' + soy.$$escapeHtml(opt_data.msg_broker['Country']) + '<br/>';
    if (opt_data.msg_broker['PhoneNumber1']) {
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1385 = goog.getMsg('Phone');
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1387 = goog.getMsg('P:');
      output += '<abbr title="' + MSG_UNNAMED_1385 + '">' + MSG_UNNAMED_1387 + '</abbr>' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber1']) + ' ' + ((opt_data.msg_broker['PhoneNumber2']) ? ', ' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber2']) : '') + '<br/>';
    }
    output += ((opt_data.msg_broker['Skype']) ? 'Skype: ' + soy.$$escapeHtml(opt_data.msg_broker['Skype']) + '<br/>' : '') + '<a href="mailto:' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '" target="_blank">' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '</a></address>';
    if (opt_data.msg_broker['BrokerID'] > 0) {
      /** @desc Allowed markets section subtitle on broker view */
      var MSG_UNNAMED_1389 = goog.getMsg('Markets');
      output += '<div class="row-fluid"><div class="span3"><h4>' + MSG_UNNAMED_1389 + '</h4>';
      var allowed_marketList124 = soy.$$getMapKeys(opt_data.msg_broker['AllowedMarkets']);
      var allowed_marketListLen124 = allowed_marketList124.length;
      for (var allowed_marketIndex124 = 0; allowed_marketIndex124 < allowed_marketListLen124; allowed_marketIndex124++) {
        var allowed_marketData124 = allowed_marketList124[allowed_marketIndex124];
        output += '<div class="row-fluid"><div class="span12">' + soy.$$escapeHtml(opt_data.msg_broker['AllowedMarkets'][allowed_marketData124]['description']) + '</div></div>';
      }
      output += '</div></div>';
    }
    if (opt_data.msg_broker['BrokerID'] >= 0) {
      if (opt_data.msg_broker['FeeStructure'].length > 0) {
        /** @desc Fee section subtitle on Broker view */
        var MSG_UNNAMED_1391 = goog.getMsg('Fees');
        /** @desc Operation column on Broker fees table */
        var MSG_UNNAMED_1393 = goog.getMsg('Operation');
        /** @desc Fees column on Broker fees table */
        var MSG_UNNAMED_1395 = goog.getMsg('Fee');
        /** @desc Terms column on Broker fees table */
        var MSG_UNNAMED_1397 = goog.getMsg('Terms');
        output += '<h4>' + MSG_UNNAMED_1391 + '</h4><table class="table table-bordered"><thead><tr><th>' + MSG_UNNAMED_1393 + '</th><th>' + MSG_UNNAMED_1395 + '</th><th>' + MSG_UNNAMED_1397 + '</th></tr></thead><tbody>';
        if (! opt_data.msg_broker['IsBrokerHub']) {
          if (opt_data.msg_broker['FormattedTransactionFeeBuy'] == opt_data.msg_broker['FormattedTransactionFeeSell']) {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1399 = goog.getMsg('Trade fee');
            output += '<tr><td>' + MSG_UNNAMED_1399 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td><td></td></tr>';
          } else {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1401 = goog.getMsg('Trade fee - Buy side');
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1403 = goog.getMsg('Trade fee - Sell side');
            output += '<tr><td>' + MSG_UNNAMED_1401 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td><td></td></tr><tr><td>' + MSG_UNNAMED_1403 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeSell']) + ' %</td><td></td></tr>';
          }
        }
        var feeList169 = opt_data.msg_broker['FeeStructure'];
        var feeListLen169 = feeList169.length;
        for (var feeIndex169 = 0; feeIndex169 < feeListLen169; feeIndex169++) {
          var feeData169 = feeList169[feeIndex169];
          output += '<tr><td>' + soy.$$escapeHtml(feeData169['Operation']) + '</td><td>' + soy.$$escapeHtml(feeData169['Fee']) + '</td><td>' + soy.$$escapeHtml(feeData169['Terms']) + '</td></tr>';
        }
        output += '</tbody></table>';
      }
    }
    if (! opt_data.msg_broker['IsBrokerHub']) {
      /** @desc Wallet section subtitle on Broker view */
      var MSG_UNNAMED_1405 = goog.getMsg('Wallets');
      /** @desc Coin  column on Broker wallet table */
      var MSG_UNNAMED_1407 = goog.getMsg('Coin');
      /** @desc type  column on Broker wallet table */
      var MSG_UNNAMED_1409 = goog.getMsg('Type');
      /** @desc address column type on Broker wallet table */
      var MSG_UNNAMED_1411 = goog.getMsg('Address');
      /** @desc multisig column type on Broker wallet table */
      var MSG_UNNAMED_1413 = goog.getMsg('Multi signature');
      /** @desc managed by column on Broker wallet table */
      var MSG_UNNAMED_1415 = goog.getMsg('Managed by');
      output += '<h4>' + MSG_UNNAMED_1405 + '</h4><table class="table table-bordered"><thead><tr><th>' + MSG_UNNAMED_1407 + '</th><th>' + MSG_UNNAMED_1409 + '</th><th>' + MSG_UNNAMED_1411 + '</th><th>' + MSG_UNNAMED_1413 + '</th><th>' + MSG_UNNAMED_1415 + '</th></tr></thead><tbody>';
      var crypto_currenciesList200 = opt_data.msg_broker['CryptoCurrencies'];
      var crypto_currenciesListLen200 = crypto_currenciesList200.length;
      for (var crypto_currenciesIndex200 = 0; crypto_currenciesIndex200 < crypto_currenciesListLen200; crypto_currenciesIndex200++) {
        var crypto_currenciesData200 = crypto_currenciesList200[crypto_currenciesIndex200];
        var walletsList201 = crypto_currenciesData200['Wallets'];
        var walletsListLen201 = walletsList201.length;
        for (var walletsIndex201 = 0; walletsIndex201 < walletsListLen201; walletsIndex201++) {
          var walletsData201 = walletsList201[walletsIndex201];
          output += '<tr><td>' + soy.$$escapeHtml(crypto_currenciesData200['CurrencyDescription']) + '</td><td>' + soy.$$escapeHtml(walletsData201['type']) + '</td><td>';
          if (crypto_currenciesData200['CurrencyCode'] == 'BTC') {
            switch (walletsData201['address'][0]) {
              case 'm':
              case 'n':
              case '2':
              case '9':
              case 'c':
                output += '<a href="https://test-insight.bitpay.com/address/' + soy.$$escapeHtml(walletsData201['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData201['address']) + '</a>';
                break;
              default:
                output += '<a href="https://blockchain.info/address/' + soy.$$escapeHtml(walletsData201['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData201['address']) + '</a>';
            }
          } else {
            output += soy.$$escapeHtml(walletsData201['address']);
          }
          output += '</td><td>';
          if (walletsData201['multisig']) {
            /** @desc Multisig true */
            var MSG_UNNAMED_1417 = goog.getMsg('Yes');
            output += MSG_UNNAMED_1417;
          } else {
            /** @desc Multisig false */
            var MSG_UNNAMED_1419 = goog.getMsg('No');
            output += MSG_UNNAMED_1419;
          }
          output += '</td><td>' + soy.$$escapeHtml(walletsData201['managed_by']) + '</td></tr>';
        }
      }
      output += '</tbody></table>';
    }
    output += '<h4>' + MSG_UNNAMED_1421 + '</h4><iframe style="width:100%;height:400px;" src="' + soy.$$escapeHtml(opt_data.msg_broker['TosUrl']) + '"></iframe>';
  }
  output += '</div>';
  return output;
};


bitex.templates.CancelDepositDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel deposit dialog message */
  var MSG_UNNAMED_1423 = goog.getMsg('Enter a reason for cancelling the deposit');
  /** @desc Cancel deposit reason label */
  var MSG_UNNAMED_1425 = goog.getMsg('Reason:');
  /** @desc reason for cancelling deposit */
  var MSG_UNNAMED_1427 = goog.getMsg('Other');
  output += '<p>' + MSG_UNNAMED_1423 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1425 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value=0 selected>' + MSG_UNNAMED_1427 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style=""></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.CancelWithdrawDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel withdraw dialog message */
  var MSG_UNNAMED_1429 = goog.getMsg('Enter a reason for cancelling the user withdraw');
  /** @desc Cancel withdraw reason label */
  var MSG_UNNAMED_1431 = goog.getMsg('Reason:');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1433 = goog.getMsg('Other');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1435 = goog.getMsg('Insufficient funds');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1437 = goog.getMsg('Account not verified');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1439 = goog.getMsg('Suspicion of fraud');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1441 = goog.getMsg('Withdrawing to a different account than yours');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1443 = goog.getMsg('Invalid wallet');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1445 = goog.getMsg('Invalid bank account');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1447 = goog.getMsg('Amount exceeded your daily withdraw limit');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1449 = goog.getMsg('User has deposits that are not yet confirmed');
  output += '<p>' + MSG_UNNAMED_1429 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1431 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value=0>' + MSG_UNNAMED_1433 + '</option><option value=-1 selected>' + MSG_UNNAMED_1435 + '</option><option value=-2>' + MSG_UNNAMED_1437 + '</option><option value=-3>' + MSG_UNNAMED_1439 + '</option><option value=-4>' + MSG_UNNAMED_1441 + '</option><option value=-5>' + MSG_UNNAMED_1443 + '</option><option value=-6>' + MSG_UNNAMED_1445 + '</option><option value=-7>' + MSG_UNNAMED_1447 + '</option><option value=-8>' + MSG_UNNAMED_1449 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style="display:none;"></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.GoogleAuthenticationCodeDialogContent = function(opt_data) {
  var output = '';
  /** @desc Google Authenticator code dialog label */
  var MSG_UNNAMED_1451 = goog.getMsg('Google Authenticator code:');
  /** @desc Limit table field header */
  var MSG_UNNAMED_1453 = goog.getMsg('Google authenticator code');
  /** @desc Google Authenticator code placeholder */
  var MSG_UNNAMED_1455 = goog.getMsg('eg. 555555');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label>' + MSG_UNNAMED_1451 + '</label><input name="token" data-uniform-validators="required" data-uniform-label="' + MSG_UNNAMED_1453 + '" label="' + MSG_UNNAMED_1455 + '" class="input-large" type="text" size="10"></div></fieldset></form>';
  return output;
};


bitex.templates.WithdrawConfirmationDialogContent = function(opt_data) {
  var output = '';
  /** @desc Withdraw confirmation dialog message */
  var MSG_UNNAMED_1457 = goog.getMsg('We just sent a confirmation code to your email.');
  /** @desc Confirmation code placeholder on withdraw confirmation dialog */
  var MSG_UNNAMED_1459 = goog.getMsg('Confirmation code');
  /** @desc Withdraw confirmation dialog security disclaimer */
  var MSG_UNNAMED_1461 = goog.getMsg('This is security measure to improve your account security');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><p>' + MSG_UNNAMED_1457 + '</p><div class="control-group"><label>Confirmation Code</label><input name="confirmation_code" type="text" data-uniform-validators="required" label="' + MSG_UNNAMED_1459 + '" class="input-block-level"></div><p><i>' + MSG_UNNAMED_1461 + '</i></p></fieldset></form>';
  return output;
};


bitex.templates.UserFeesDialogContent = function(opt_data) {
  var output = '';
  /** @desc Buy fee */
  var MSG_UNNAMED_1463 = goog.getMsg('Buy fee ');
  /** @desc Buy fee */
  var MSG_UNNAMED_1465 = goog.getMsg('Sell fee');
  output += '<form class="form-horizontal"><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee">' + MSG_UNNAMED_1463 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.buy_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee">' + MSG_UNNAMED_1465 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.sell_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_sell_fee"> Use Broker Fee</label></div></div></div></form>';
  return output;
};


bitex.templates.YourAccountSummary = function(opt_data) {
  var output = '';
  /** @desc Your account label in the right side bar */
  var MSG_UNNAMED_1467 = goog.getMsg('Your account');
  /** @desc Unconfirmed deposits */
  var MSG_UNNAMED_1469 = goog.getMsg('Unconfirmed deposits from your confirmed addresses');
  output += '<h6>' + MSG_UNNAMED_1467 + '</h6>';
  var accountList354 = opt_data.accounts;
  var accountListLen354 = accountList354.length;
  for (var accountIndex354 = 0; accountIndex354 < accountListLen354; accountIndex354++) {
    var accountData354 = accountList354[accountIndex354];
    output += '<table class="table table-bordered account-summary-table" ><tbody><tr id="id_account_summary_' + soy.$$escapeHtml(accountData354['brokerID']) + '" class=\'account-summary-broker model-action-set\' data-key="SelectedBrokerID" data-value="' + soy.$$escapeHtml(accountData354['brokerID']) + '"' + ((opt_data.accounts.length <= 1 || accountData354['currencies'].length == 0) ? 'style="display:none;"' : '') + '><td colspan="3"><strong>' + soy.$$escapeHtml(accountData354['brokerName']) + '</strong></td></tr>';
    var currency_infoList366 = accountData354['currencies'];
    var currency_infoListLen366 = currency_infoList366.length;
    for (var currency_infoIndex366 = 0; currency_infoIndex366 < currency_infoListLen366; currency_infoIndex366++) {
      var currency_infoData366 = currency_infoList366[currency_infoIndex366];
      output += '<tr><td style="padding: 4px;' + ((! (currency_infoIndex366 == 0)) ? 'border-top: 0;' : '') + '"><strong>' + soy.$$escapeHtml(currency_infoData366['currency']) + '</strong></td><td style="padding: 4px;' + ((! (currency_infoIndex366 == 0)) ? 'border-top: 0;' : '') + '"><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(accountData354['brokerID']) + ':' + soy.$$escapeHtml(accountData354['clientID']) + '_' + soy.$$escapeHtml(currency_infoData366['currency']) + '" data-blink-class="balance-info-blink">' + soy.$$escapeHtml(currency_infoData366['formattedBalance']) + '</span><abbr title="' + MSG_UNNAMED_1469 + '"><em><span class="bitex-model" data-model-key="formatted_position_' + soy.$$escapeHtml(accountData354['brokerID']) + ':' + soy.$$escapeHtml(accountData354['clientID']) + '_' + soy.$$escapeHtml(currency_infoData366['currency']) + '" data-blink-class="balance-info-blink"></span></em></abbr></td><td style="padding: 4px;border-left:0;' + ((! (currency_infoIndex366 == 0)) ? 'border-top: 0;' : '') + '">' + ((currency_infoData366['showDeposit'] && currency_infoData366['showWithdraw']) ? '<div class="btn-group">' : '') + ((currency_infoData366['showDeposit']) ? '<button class="btn btn-mini" data-action="deposit" data-currency="' + soy.$$escapeHtml(currency_infoData366['currency']) + '"><i data-action="deposit" data-currency="' + soy.$$escapeHtml(currency_infoData366['currency']) + '" class="icon-download-alt"></i></button>' : '') + ((currency_infoData366['showWithdraw']) ? '<button class="btn btn-mini" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currency_infoData366['currency']) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currency_infoData366['currency']) + '" class="icon-upload-alt"></i></button>' : '') + ((currency_infoData366['showDeposit'] && currency_infoData366['showWithdraw']) ? '</div>' : '') + '</td></tr>';
    }
    output += '</tbody></table>';
  }
  return output;
};


bitex.templates.AccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList425 = opt_data.currencies;
  var currencyListLen425 = currencyList425.length;
  for (var currencyIndex425 = 0; currencyIndex425 < currencyListLen425; currencyIndex425++) {
    var currencyData425 = currencyList425[currencyIndex425];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1471 = goog.getMsg(
        'Available {$currency}',
        {'currency': soy.$$escapeHtml(currencyData425)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1471 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData425) + '" data-blink-class="balance-info-blink"></span></td>';
    if (opt_data.action == 'deposit') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1473 = goog.getMsg(' Deposit');
      output += '<td><button class="btn btn-mini" data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData425) + '"><i data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData425) + '" class="icon-plus"/>' + MSG_UNNAMED_1473 + '</button></td>';
    }
    if (opt_data.action == 'withdraw') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1475 = goog.getMsg(' Withdraw');
      output += '<td><button class="btn btn-mini" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData425) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData425) + '" class="icon-minus"/>' + MSG_UNNAMED_1475 + '</button></td>';
    }
    output += '</tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.WaitingForDepositResponseDialogContent = function(opt_data) {
  var output = '';
  /** @desc processing deposit request waiting dialog msg */
  var MSG_UNNAMED_1477 = goog.getMsg('Processing deposit request...');
  output += '<div class="row-fluid" data-deposit-status="processing"><h5 class="text-center">' + MSG_UNNAMED_1477 + '</h5></div><div class="row-fluid"><div class="span6 offset3"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>';
  return output;
};


bitex.templates.DepositCryptoCurrencyContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + '"/></div></div>';
};


bitex.templates.CryptoCurrencyQRContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.data['Wallet']) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + soy.$$escapeHtml(opt_data.data['Wallet']) + '"/></div></div>';
};


bitex.templates.ConfirmTrustedAddressContentDialog = function(opt_data) {
  var output = '';
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1479 = goog.getMsg(' Do you want to enable instant deposits for this address?');
  /** @desc confirm trusted label placeholder */
  var MSG_UNNAMED_1481 = goog.getMsg('Enter a label for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1483 = goog.getMsg('Only enable it if you have the private key for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1485 = goog.getMsg('Always remember what happened at MtGox');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1487 = goog.getMsg('Never ever under any circumstances leave your Bitcoins deposited at any Exchange, no matter how secure they claim to be. Bitcoins are meant to be with the people and not in the hands of the Exchange operator. We don\'t want to create a "pot of gold" that will attract hackers. The "Instant deposits" technology will allow you to send your bitcoins instantly to trade them in the exchange, thus eliminating the need for you to leave Bitcoins at the exchange in order to negotiate them quickly.');
  output += '<div class="row-fluid"><h3 class="text-center">' + MSG_UNNAMED_1479 + '</h3><h5 class="text-center">' + soy.$$escapeHtml(opt_data.data['Address']) + '</h5><div class="text-center"><input type="text" class="confirm-trusted-address-label" size="30" placeholder="' + MSG_UNNAMED_1481 + '"></input></div><h4 class="text-center">' + MSG_UNNAMED_1483 + '</h4><div class="alert alert-block"><h4>' + MSG_UNNAMED_1485 + '</h4>' + MSG_UNNAMED_1487 + '</div></div>';
  return output;
};


bitex.templates.ConfirmDepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '';
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1489 = goog.getMsg(' IMPORTANT! ');
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1491 = goog.getMsg(
      ' We will generate a unique {$currencydescription} address that will be valid only for this transaction.',
      {'currencydescription': soy.$$escapeHtml(opt_data.currencydescription)});
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1493 = goog.getMsg(' Did you understand? ');
  output += '<div class="row-fluid" data-deposit-status="confirm"><h3 class="text-center">' + MSG_UNNAMED_1489 + '</h3><h4 class="text-center">' + MSG_UNNAMED_1491 + '</h4><h3 class="text-center">' + MSG_UNNAMED_1493 + '</h3><br/><br/></div>';
  return output;
};


bitex.templates.DepositSlipContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="done"><iframe allowtransparency="true" src="' + soy.$$escapeHtml(opt_data.rest_url) + '/get_deposit?deposit_id=' + soy.$$escapeHtml(opt_data.deposit_id) + '" frameborder="0" style="width: 500px; height: 500px; border: none;" scrolling="yes"></iframe></div>';
};


bitex.templates.FeesFormControls = function(opt_data) {
  var output = '';
  /** @desc Fee label */
  var MSG_UNNAMED_1495 = goog.getMsg('Fees:');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1497 = goog.getMsg('Percent fee');
  /** @desc Fee fixed label */
  var MSG_UNNAMED_1499 = goog.getMsg('Fixed fee');
  /** @desc Net amount */
  var MSG_UNNAMED_1501 = goog.getMsg('Net amount');
  output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1495 + '</label><div class="controls"><div class="row-fluid"><div class="span3"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16"  style="width: 40px;" name="PercentFee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div><span style="font-style: italic;">' + MSG_UNNAMED_1497 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">+</span></div><div class="span3"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" style="width: 40px;" name="FixedFee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div><span style="font-style: italic;">' + MSG_UNNAMED_1499 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">=</span></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1501 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label" style="text-align: left;"></label></div></div>';
  return output;
};


bitex.templates.FeesForm = function(opt_data) {
  var output = '';
  /** @desc requested amount */
  var MSG_UNNAMED_1503 = goog.getMsg('Requested Amount');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '"><input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount) + '"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1503 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.formattedAmount) + '</label></div></div>' + bitex.templates.FeesFormControls(opt_data) + '</form>';
  return output;
};


bitex.templates.DepositWithdrawDialogContent = function(opt_data) {
  var output = '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '">' + ((opt_data.side == 'broker') ? '<input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount / 1.0e8) + '">' : '') + '<div class="error"></div>';
  if (! opt_data.force_method) {
    if (opt_data.methods.length > 1) {
      /** @desc method */
      var MSG_UNNAMED_1505 = goog.getMsg('Method');
      output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1505 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.methodID) + '" name="Method" class="withdraw-method-selector">';
      var methodList585 = opt_data.methods;
      var methodListLen585 = methodList585.length;
      for (var methodIndex585 = 0; methodIndex585 < methodListLen585; methodIndex585++) {
        var methodData585 = methodList585[methodIndex585];
        output += '<option ' + ((methodIndex585 == 0) ? 'selected' : '') + ' value="' + soy.$$escapeHtml(methodData585['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData585['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData585['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData585['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">' + soy.$$escapeHtml(methodData585['description']) + '</option>';
      }
      output += '</select></div></div>';
    } else {
      var methodList610 = opt_data.methods;
      var methodListLen610 = methodList610.length;
      for (var methodIndex610 = 0; methodIndex610 < methodListLen610; methodIndex610++) {
        var methodData610 = methodList610[methodIndex610];
        output += '<input  id="' + soy.$$escapeHtml(opt_data.methodID) + '" type="hidden" name="Method"  value="' + soy.$$escapeHtml(methodData610['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData610['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData610['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData610['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">';
      }
    }
  }
  output += '<div class="withdraw-methods">';
  if (opt_data.methods.length == 0) {
    /** @desc Error message when the brokers doesn't have deposit methods */
    var MSG_UNNAMED_1507 = goog.getMsg('We are not accepting deposits at this moment. We sorry for the inconvenience.');
    output += '<div class="alert alert-danger text-center">' + MSG_UNNAMED_1507 + '</div>';
  }
  var methodList636 = opt_data.methods;
  var methodListLen636 = methodList636.length;
  for (var methodIndex636 = 0; methodIndex636 < methodListLen636; methodIndex636++) {
    var methodData636 = methodList636[methodIndex636];
    if (opt_data.force_method) {
      if (methodData636['method'] == opt_data.force_method) {
        if (opt_data.side == 'client') {
          /** @desc amount */
          var MSG_UNNAMED_1509 = goog.getMsg('Amount');
          output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1509 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(methodData636['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData636['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData636['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData636['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData636['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData636['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-filters="positive_number" type="text" class="withdraw-field input-small" size="16" name="Amount"></div>';
          if (methodData636['limits'][opt_data.verificationLevel]['enabled']) {
            output += '<div><em><small>';
            if (methodData636['limits'][opt_data.verificationLevel]['min']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1511 = goog.getMsg(
                  ' Maximum: {$xxx} per day.  ',
                  {'xxx': soy.$$escapeHtml(methodData636['limits'][opt_data.verificationLevel]['formatted_max'])});
              output += MSG_UNNAMED_1511 + '<br>';
            }
            if (methodData636['limits'][opt_data.verificationLevel]['max']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1513 = goog.getMsg(
                  ' Minimum: {$xxx} per transaction.  ',
                  {'xxx': soy.$$escapeHtml(methodData636['limits'][opt_data.verificationLevel]['formatted_min'])});
              output += MSG_UNNAMED_1513;
            }
            output += '</small></em></div>';
          }
          output += '</div></div>';
        }
        var fieldList687 = methodData636['fields'];
        var fieldListLen687 = fieldList687.length;
        for (var fieldIndex687 = 0; fieldIndex687 < fieldListLen687; fieldIndex687++) {
          var fieldData687 = fieldList687[fieldIndex687];
          output += (fieldData687['side'] == opt_data.side) ? '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData687['label']) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + soy.$$escapeHtml(fieldData687['validator']) + '" type="' + soy.$$escapeHtml(fieldData687['type']) + '" name="' + soy.$$escapeHtml(fieldData687['name']) + '" label="' + soy.$$escapeHtml(fieldData687['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData687['value']) + '"/></div></div>' : '';
        }
        if (opt_data.side == 'client') {
          /** @desc Fee percentage label */
          var MSG_UNNAMED_1515 = goog.getMsg('Fees:');
          /** @desc Net amount */
          var MSG_UNNAMED_1517 = goog.getMsg('Net amount');
          output += '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData636['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData636['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData636['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData636['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData636['fixed_fee']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1515 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData636['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + ' ><label class="control-label">' + MSG_UNNAMED_1517 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData636['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label" style="text-align: left;"></label></div></div>';
        } else {
          output += (opt_data.side == 'broker') ? '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData636['disclaimer']) + '</label></div></div>' + ((opt_data.showFeeDataEntry) ? bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: methodData636['method'] + '_' + opt_data.percentFeeID, percentFee: methodData636['percent_fee'], fixedFeeID: methodData636['method'] + '_' + opt_data.fixedFeeID, fixedFee: methodData636['fixed_fee'], totalFeesID: methodData636['method'] + '_' + opt_data.totalFeesID, netValueID: methodData636['method'] + '_' + opt_data.netValueID}) : '') : '';
        }
      }
    } else {
      /** @desc Fee percentage label */
      var MSG_UNNAMED_1525 = goog.getMsg('Fees:');
      /** @desc Net amount */
      var MSG_UNNAMED_1527 = goog.getMsg('Net amount');
      output += '<div class="withdraw-method" data-withdraw-method="' + soy.$$escapeHtml(methodData636['method']) + '" style="' + ((! (methodIndex636 == 0)) ? 'display:none;' : '') + '" >';
      if (opt_data.side == 'client') {
        /** @desc amount */
        var MSG_UNNAMED_1519 = goog.getMsg('Amount');
        output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1519 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(methodData636['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData636['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData636['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData636['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData636['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData636['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-filters="positive_number" type="text" class="withdraw-field input-small" size="16" name="Amount" ' + ((! (methodIndex636 == 0)) ? 'disabled' : '') + '></div>';
        if (methodData636['limits'][opt_data.verificationLevel]['enabled']) {
          output += '<div><em><small>';
          if (methodData636['limits'][opt_data.verificationLevel]['min']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1521 = goog.getMsg(
                ' Maximum: {$xxx} per day.  ',
                {'xxx': soy.$$escapeHtml(methodData636['limits'][opt_data.verificationLevel]['formatted_max'])});
            output += MSG_UNNAMED_1521 + '<br>';
          }
          if (methodData636['limits'][opt_data.verificationLevel]['max']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1523 = goog.getMsg(
                ' Minimum: {$xxx} per transaction.  ',
                {'xxx': soy.$$escapeHtml(methodData636['limits'][opt_data.verificationLevel]['formatted_min'])});
            output += MSG_UNNAMED_1523;
          }
          output += '</small></em></div>';
        }
        output += '</div></div>';
      }
      output += '<div class="control-group" style="margin-bottom: 5px;"><div class="controls"><label>' + soy.$$escapeHtml(methodData636['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData636['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData636['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData636['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData636['fixed_fee']) + '"></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1525 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData636['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div><div class="control-group" ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + '><label class="control-label">' + MSG_UNNAMED_1527 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(methodData636['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label></div></div>';
      var fieldList846 = methodData636['fields'];
      var fieldListLen846 = fieldList846.length;
      for (var fieldIndex846 = 0; fieldIndex846 < fieldListLen846; fieldIndex846++) {
        var fieldData846 = fieldList846[fieldIndex846];
        output += (fieldData846['side'] == opt_data.side) ? '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData846['label']) + '</label><div class="controls"><input class="withdraw-field" data-uniform-validators="' + soy.$$escapeHtml(fieldData846['validator']) + '" type="' + soy.$$escapeHtml(fieldData846['type']) + '" name="' + soy.$$escapeHtml(fieldData846['name']) + '" label="' + soy.$$escapeHtml(fieldData846['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData846['value']) + '"' + ((! (methodIndex636 == 0)) ? 'disabled' : '') + ' /></div></div>' : '';
      }
      output += '</div>';
    }
  }
  output += '</div><div class="control-group dlg-response-group"><label class="control-label dlg-response-group-label"></label><div class="controls" class="dlg-response-group-value" ></div></div></fieldset></form>';
  return output;
};


bitex.templates.YourFeesBalances = function(opt_data) {
  var output = '';
  /** @desc label for user buy fee */
  var MSG_UNNAMED_1529 = goog.getMsg('Buy Fee');
  /** @desc label for user sell fee */
  var MSG_UNNAMED_1533 = goog.getMsg('Sell Fee');
  output += '<table class="table table-striped table-condensed"><tbody><tr><td><strong>' + MSG_UNNAMED_1529 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.buy_fee) {
    output += soy.$$escapeHtml(opt_data.buy_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1531 = goog.getMsg('-');
    output += MSG_UNNAMED_1531;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1533 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.sell_fee) {
    output += soy.$$escapeHtml(opt_data.sell_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1535 = goog.getMsg('-');
    output += MSG_UNNAMED_1535;
  }
  output += '</span></td></tr></tbody></table>';
  return output;
};


bitex.templates.YourAccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList894 = opt_data.currencies;
  var currencyListLen894 = currencyList894.length;
  for (var currencyIndex894 = 0; currencyIndex894 < currencyListLen894; currencyIndex894++) {
    var currencyData894 = currencyList894[currencyIndex894];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1537 = goog.getMsg(
        'Available {$code}',
        {'code': soy.$$escapeHtml(currencyData894.code)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1537 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData894.model_key) + '" data-blink-class="balance-info-blink">' + ((currencyData894.balance) ? soy.$$escapeHtml(currencyData894.balance) : '-') + '</span></td></tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.AccountOverviewHeaderVerified = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1539 = goog.getMsg('No');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1541 = goog.getMsg('Pending');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1543 = goog.getMsg('Progress');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1545 = goog.getMsg('Yes - Level I ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1547 = goog.getMsg('Yes - Level II ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1549 = goog.getMsg('Yes - Level III ');
  output += '<select id="id_select_new_verification_level" data-profile-change="Verified" ><option value=0 ' + ((opt_data.msg_customer_detail['Verified'] == 0) ? 'selected' : '') + '>' + MSG_UNNAMED_1539 + '</option><option value=1 ' + ((opt_data.msg_customer_detail['Verified'] == 1) ? 'selected' : '') + '>' + MSG_UNNAMED_1541 + '</option><option value=2 ' + ((opt_data.msg_customer_detail['Verified'] == 2) ? 'selected' : '') + '>' + MSG_UNNAMED_1543 + '</option><option value=3 ' + ((opt_data.msg_customer_detail['Verified'] == 3) ? 'selected' : '') + '>' + MSG_UNNAMED_1545 + '</option><option value=4 ' + ((opt_data.msg_customer_detail['Verified'] == 4) ? 'selected' : '') + '>' + MSG_UNNAMED_1547 + '</option><option value=5 ' + ((opt_data.msg_customer_detail['Verified'] == 5) ? 'selected' : '') + '>' + MSG_UNNAMED_1549 + '</option></select>';
  return output;
};


bitex.templates.AccountOverviewHeaderWithDrawEmailData = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['NeedWithdrawEmail']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1551 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1553 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1551 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1553 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1555 = goog.getMsg('Disabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1557 = goog.getMsg('Enabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1555 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1557 + '</a>';
  }
  return output;
};


bitex.templates.AccountOverviewHeaderTwoFactors = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['TwoFactorEnabled']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1559 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1561 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1559 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="SET_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1561 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1563 = goog.getMsg('Disabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1563 + '</span>';
  }
  return output;
};


bitex.templates.AccountOverviewHeader = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_1565 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1567 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1569 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1571 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1573 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1575 = goog.getMsg('Last login');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1577 = goog.getMsg('Is verified');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1579 = goog.getMsg('Has two step authentication');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1581 = goog.getMsg('Registration date');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1583 = goog.getMsg('Needs email confirmation on withdraw');
  output += '<table class="table table-striped table-condensed account-overview-table" style="width: 350px"><tbody><tr><td><strong>' + MSG_UNNAMED_1565 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1567 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1569 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1571 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1573 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1575 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['LastLogin']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1577 + '</strong></td><td class="account-overview-val account-overview-verified">' + bitex.templates.AccountOverviewHeaderVerified(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1579 + '</strong></td><td class="account-overview-val account-overview-two-factors" >' + bitex.templates.AccountOverviewHeaderTwoFactors(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1581 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Created']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1583 + '</strong></td><td class="account-overview-val account-overview-withdraw-email">' + bitex.templates.AccountOverviewHeaderWithDrawEmailData(opt_data) + '</td></tr></tbody></table>';
  return output;
};


bitex.templates.AccountOverviewUser = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_1585 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1587 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1589 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1591 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1593 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1595 = goog.getMsg('Is verified');
  output += '<table class="table table-striped table-condensed account-overview-table" style="width: 350px"><tbody><tr><td><strong>' + MSG_UNNAMED_1585 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1587 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1589 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1591 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1593 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1595 + '</strong></td><td class="account-overview-val account-overview-verified">';
  switch (opt_data.msg_customer_detail['Verified']) {
    case 0:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1597 = goog.getMsg('No');
      output += '<span class="label label-important">' + MSG_UNNAMED_1597 + '</span>';
      break;
    case 1:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1599 = goog.getMsg('Pending');
      output += '<span class="label label-important">' + MSG_UNNAMED_1599 + '</span>';
      break;
    case 2:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1601 = goog.getMsg('Yes');
      output += '<span class="label label-success">' + MSG_UNNAMED_1601 + '</span>';
      break;
    case 3:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1603 = goog.getMsg('Yes - Level II');
      output += '<span class="label label-success">' + MSG_UNNAMED_1603 + '</span>';
      break;
    case 4:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1605 = goog.getMsg('Yes - Level III');
      output += '<span class="label label-success">' + MSG_UNNAMED_1605 + '</span>';
      break;
    case 5:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1607 = goog.getMsg('Yes - Level IV');
      output += '<span class="label label-success">' + MSG_UNNAMED_1607 + '</span>';
      break;
  }
  output += '</td></tr></tbody></table>';
  return output;
};


bitex.templates.EnterVerificationDataDialogContent = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1609 = goog.getMsg('Verification data');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="ClientID" value="' + soy.$$escapeHtml(opt_data.clientID) + '"><div class="control-group"><label class="control-label"> ' + MSG_UNNAMED_1609 + ' </label><div class="controls"><input type="text" class="input-xlarge" size="16" name="VerificationData"></div></div></form>';
  return output;
};


bitex.templates.DataGrid = function(opt_data) {
  var output = '<div ' + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '  class="fuelux ' + ((opt_data.base_class) ? soy.$$escapeHtml(opt_data.base_class) : '') + '" style="width:100%;"><table class="table table-bordered datagrid datagrid-stretch-header"><thead><tr><th colspan="4" ' + ((! opt_data.title && ! opt_data.show_search) ? 'style="display: none;"' : '') + '><span class="datagrid-header-title"  ' + ((! opt_data.title) ? 'style="display: none;"' : '') + ' ><strong>' + soy.$$escapeHtml(opt_data.title) + '</strong></span><div class="datagrid-header-left" ' + ((! opt_data.show_search) ? 'style="display: none;"' : '') + '><div class="input-append search datagrid-search"><input type="text" class="input-medium" placeholder="' + soy.$$escapeHtml(opt_data.search_placeholder) + '"><button type="button" class="btn"><i class="icon-search"></i></button></div></div><div class="datagrid-header-right">';
  if (opt_data.button_filters) {
    output += '<div class="select filter datagrid-filter" data-resize="auto"><button type="button" data-toggle="dropdown" class="btn dropdown-toggle">';
    var buttonList1149 = opt_data.button_filters;
    var buttonListLen1149 = buttonList1149.length;
    for (var buttonIndex1149 = 0; buttonIndex1149 < buttonListLen1149; buttonIndex1149++) {
      var buttonData1149 = buttonList1149[buttonIndex1149];
      output += (buttonIndex1149 == 0) ? '<span class="dropdown-label" style="width: 111px;">' + soy.$$escapeHtml(buttonData1149['label']) + '</span>' : '';
    }
    output += '<span class="caret"></span></button><ul class="dropdown-menu">';
    var buttonList1157 = opt_data.button_filters;
    var buttonListLen1157 = buttonList1157.length;
    for (var buttonIndex1157 = 0; buttonIndex1157 < buttonListLen1157; buttonIndex1157++) {
      var buttonData1157 = buttonList1157[buttonIndex1157];
      output += '<li data-value="' + soy.$$escapeHtml(buttonData1157['value']) + '"><a href="#">' + soy.$$escapeHtml(buttonData1157['label']) + '</a></li>';
    }
    output += '</ul></div>';
  }
  output += '</div></th></tr></thead></table><div class="datagrid-stretch-wrapper" style="height:' + ((opt_data.wrapper_height) ? soy.$$escapeHtml(opt_data.wrapper_height) : '360') + 'px;"><table class="table table-bordered datagrid"><tbody></tbody></table></div><table class="table table-bordered datagrid datagrid-stretch-footer"><tfoot><tr><th colspan="4"><div class="datagrid-footer-left" style="visibility: visible;"><div class="grid-controls"><span><span class="grid-start"></span> -<span class="grid-end"></span></span></div></div><div class="datagrid-footer-right" style="visibility: visible;"><div class="grid-pager"><button type="button" class="btn grid-prevpage"><i class="icon-chevron-left"></i></button><button type="button" class="btn grid-nextpage"><i class="icon-chevron-right"></i></button></div></div></th></tr></tfoot></table></div>';
  return output;
};
