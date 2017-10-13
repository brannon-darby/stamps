
'use strict';
var server = require('../../server/server');

module.exports = function(SwsimV57SwsimV57Soap12) {

  var soapDataSource = server.datasources.stamps;
  var SwsimV57SwsimV57Soap12;

  soapDataSource.once('connected', function () {
    // Create the model
    SwsimV57SwsimV57Soap12 = soapDataSource.createModel('SwsimV57SwsimV57Soap12', {});
  });


  /**
   * CreateIndicium
   * @param {CreateIndicium} CreateIndicium CreateIndicium
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.CreateIndicium = function(CreateIndicium, callback) {
      SwsimV57SwsimV57Soap12.CreateIndicium(CreateIndicium, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateEnvelopeIndicium
   * @param {CreateEnvelopeIndicium} CreateEnvelopeIndicium CreateEnvelopeIndicium
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.CreateEnvelopeIndicium = function(CreateEnvelopeIndicium, callback) {
      SwsimV57SwsimV57Soap12.CreateEnvelopeIndicium(CreateEnvelopeIndicium, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateUnfundedIndicium
   * @param {CreateUnfundedIndicium} CreateUnfundedIndicium CreateUnfundedIndicium
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.CreateUnfundedIndicium = function(CreateUnfundedIndicium, callback) {
      SwsimV57SwsimV57Soap12.CreateUnfundedIndicium(CreateUnfundedIndicium, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetRates
   * @param {GetRates} GetRates GetRates
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetRates = function(GetRates, callback) {
      SwsimV57SwsimV57Soap12.GetRates(GetRates, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CleanseAddress
   * @param {CleanseAddress} CleanseAddress CleanseAddress
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.CleanseAddress = function(CleanseAddress, callback) {
      SwsimV57SwsimV57Soap12.CleanseAddress(CleanseAddress, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateMailingLabelIndicia
   * @param {CreateMailingLabelIndicia} CreateMailingLabelIndicia CreateMailingLabelIndicia
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.CreateMailingLabelIndicia = function(CreateMailingLabelIndicia, callback) {
      SwsimV57SwsimV57Soap12.CreateMailingLabelIndicia(CreateMailingLabelIndicia, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateNetStampsIndicia
   * @param {CreateNetStampsIndicia} CreateNetStampsIndicia CreateNetStampsIndicia
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.CreateNetStampsIndicia = function(CreateNetStampsIndicia, callback) {
      SwsimV57SwsimV57Soap12.CreateNetStampsIndicia(CreateNetStampsIndicia, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * RegisterAccount
   * @param {RegisterAccount} RegisterAccount RegisterAccount
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.RegisterAccount = function(RegisterAccount, callback) {
      SwsimV57SwsimV57Soap12.RegisterAccount(RegisterAccount, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateScanForm
   * @param {CreateScanForm} CreateScanForm CreateScanForm
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.CreateScanForm = function(CreateScanForm, callback) {
      SwsimV57SwsimV57Soap12.CreateScanForm(CreateScanForm, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * PriceOrder
   * @param {PriceOrder} PriceOrder PriceOrder
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.PriceOrder = function(PriceOrder, callback) {
      SwsimV57SwsimV57Soap12.PriceOrder(PriceOrder, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * PlaceOrder
   * @param {PlaceOrder} PlaceOrder PlaceOrder
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.PlaceOrder = function(PlaceOrder, callback) {
      SwsimV57SwsimV57Soap12.PlaceOrder(PlaceOrder, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetShipmentList
   * @param {GetShipmentList} GetShipmentList GetShipmentList
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetShipmentList = function(GetShipmentList, callback) {
      SwsimV57SwsimV57Soap12.GetShipmentList(GetShipmentList, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetShipmentListByToken
   * @param {GetShipmentListByToken} GetShipmentListByToken GetShipmentListByToken
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetShipmentListByToken = function(GetShipmentListByToken, callback) {
      SwsimV57SwsimV57Soap12.GetShipmentListByToken(GetShipmentListByToken, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * ChangePlan
   * @param {ChangePlan} ChangePlan ChangePlan
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.ChangePlan = function(ChangePlan, callback) {
      SwsimV57SwsimV57Soap12.ChangePlan(ChangePlan, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetBalanceHistory
   * @param {GetBalanceHistory} GetBalanceHistory GetBalanceHistory
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetBalanceHistory = function(GetBalanceHistory, callback) {
      SwsimV57SwsimV57Soap12.GetBalanceHistory(GetBalanceHistory, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetBalanceHistoryByToken
   * @param {GetBalanceHistoryByToken} GetBalanceHistoryByToken GetBalanceHistoryByToken
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetBalanceHistoryByToken = function(GetBalanceHistoryByToken, callback) {
      SwsimV57SwsimV57Soap12.GetBalanceHistoryByToken(GetBalanceHistoryByToken, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * PurchasePostage
   * @param {PurchasePostage} PurchasePostage PurchasePostage
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.PurchasePostage = function(PurchasePostage, callback) {
      SwsimV57SwsimV57Soap12.PurchasePostage(PurchasePostage, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CancelIndicium
   * @param {CancelIndicium} CancelIndicium CancelIndicium
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.CancelIndicium = function(CancelIndicium, callback) {
      SwsimV57SwsimV57Soap12.CancelIndicium(CancelIndicium, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetURL
   * @param {GetURL} GetURL GetURL
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetURL = function(GetURL, callback) {
      SwsimV57SwsimV57Soap12.GetURL(GetURL, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SetCodeWords
   * @param {SetCodeWords} SetCodeWords SetCodeWords
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.SetCodeWords = function(SetCodeWords, callback) {
      SwsimV57SwsimV57Soap12.SetCodeWords(SetCodeWords, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CarrierPickup
   * @param {CarrierPickup} CarrierPickup CarrierPickup
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.CarrierPickup = function(CarrierPickup, callback) {
      SwsimV57SwsimV57Soap12.CarrierPickup(CarrierPickup, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SetAutoBuy
   * @param {SetAutoBuy} SetAutoBuy SetAutoBuy
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.SetAutoBuy = function(SetAutoBuy, callback) {
      SwsimV57SwsimV57Soap12.SetAutoBuy(SetAutoBuy, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * EnumCodeWordTypes
   * @param {EnumCodeWordTypes} EnumCodeWordTypes EnumCodeWordTypes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.EnumCodeWordTypes = function(EnumCodeWordTypes, callback) {
      SwsimV57SwsimV57Soap12.EnumCodeWordTypes(EnumCodeWordTypes, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * RecoverUsername
   * @param {RecoverUsername} RecoverUsername RecoverUsername
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.RecoverUsername = function(RecoverUsername, callback) {
      SwsimV57SwsimV57Soap12.RecoverUsername(RecoverUsername, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetSupportedCountries
   * @param {GetSupportedCountries} GetSupportedCountries GetSupportedCountries
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetSupportedCountries = function(GetSupportedCountries, callback) {
      SwsimV57SwsimV57Soap12.GetSupportedCountries(GetSupportedCountries, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * ChangePassword
   * @param {ChangePassword} ChangePassword ChangePassword
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.ChangePassword = function(ChangePassword, callback) {
      SwsimV57SwsimV57Soap12.ChangePassword(ChangePassword, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetNetStampsImages
   * @param {GetNetStampsImages} GetNetStampsImages GetNetStampsImages
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetNetStampsImages = function(GetNetStampsImages, callback) {
      SwsimV57SwsimV57Soap12.GetNetStampsImages(GetNetStampsImages, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetChangePlanStatus
   * @param {GetChangePlanStatus} GetChangePlanStatus GetChangePlanStatus
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetChangePlanStatus = function(GetChangePlanStatus, callback) {
      SwsimV57SwsimV57Soap12.GetChangePlanStatus(GetChangePlanStatus, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * ResubmitPurchase
   * @param {ResubmitPurchase} ResubmitPurchase ResubmitPurchase
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.ResubmitPurchase = function(ResubmitPurchase, callback) {
      SwsimV57SwsimV57Soap12.ResubmitPurchase(ResubmitPurchase, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * EnumNetStampsLayouts
   * @param {EnumNetStampsLayouts} EnumNetStampsLayouts EnumNetStampsLayouts
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.EnumNetStampsLayouts = function(EnumNetStampsLayouts, callback) {
      SwsimV57SwsimV57Soap12.EnumNetStampsLayouts(EnumNetStampsLayouts, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * EnumCostCodes
   * @param {EnumCostCodes} EnumCostCodes EnumCostCodes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.EnumCostCodes = function(EnumCostCodes, callback) {
      SwsimV57SwsimV57Soap12.EnumCostCodes(EnumCostCodes, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AuthenticateWithTransferAuthenticator
   * @param {AuthenticateWithTransferAuthenticator} AuthenticateWithTransferAuthenticator AuthenticateWithTransferAuthenticator
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.AuthenticateWithTransferAuthenticator = function(AuthenticateWithTransferAuthenticator, callback) {
      SwsimV57SwsimV57Soap12.AuthenticateWithTransferAuthenticator(AuthenticateWithTransferAuthenticator, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * StartPasswordReset
   * @param {StartPasswordReset} StartPasswordReset StartPasswordReset
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.StartPasswordReset = function(StartPasswordReset, callback) {
      SwsimV57SwsimV57Soap12.StartPasswordReset(StartPasswordReset, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * FinishPasswordReset
   * @param {FinishPasswordReset} FinishPasswordReset FinishPasswordReset
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.FinishPasswordReset = function(FinishPasswordReset, callback) {
      SwsimV57SwsimV57Soap12.FinishPasswordReset(FinishPasswordReset, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCodewordQuestions
   * @param {GetCodewordQuestions} GetCodewordQuestions GetCodewordQuestions
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetCodewordQuestions = function(GetCodewordQuestions, callback) {
      SwsimV57SwsimV57Soap12.GetCodewordQuestions(GetCodewordQuestions, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * VoidUnfundedIndicium
   * @param {VoidUnfundedIndicium} VoidUnfundedIndicium VoidUnfundedIndicium
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.VoidUnfundedIndicium = function(VoidUnfundedIndicium, callback) {
      SwsimV57SwsimV57Soap12.VoidUnfundedIndicium(VoidUnfundedIndicium, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * FundUnfundedIndicium
   * @param {FundUnfundedIndicium} FundUnfundedIndicium FundUnfundedIndicium
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.FundUnfundedIndicium = function(FundUnfundedIndicium, callback) {
      SwsimV57SwsimV57Soap12.FundUnfundedIndicium(FundUnfundedIndicium, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AuthenticateUser
   * @param {AuthenticateUser} AuthenticateUser AuthenticateUser
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.AuthenticateUser = function(AuthenticateUser, callback) {
      SwsimV57SwsimV57Soap12.AuthenticateUser(AuthenticateUser, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetAccountInfo
   * @param {GetAccountInfo} GetAccountInfo GetAccountInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetAccountInfo = function(GetAccountInfo, callback) {
      SwsimV57SwsimV57Soap12.GetAccountInfo(GetAccountInfo, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPurchaseStatus
   * @param {GetPurchaseStatus} GetPurchaseStatus GetPurchaseStatus
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.GetPurchaseStatus = function(GetPurchaseStatus, callback) {
      SwsimV57SwsimV57Soap12.GetPurchaseStatus(GetPurchaseStatus, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * TrackShipment
   * @param {TrackShipment} TrackShipment TrackShipment
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  SwsimV57SwsimV57Soap12.TrackShipment = function(TrackShipment, callback) {
      SwsimV57SwsimV57Soap12.TrackShipment(TrackShipment, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  SwsimV57SwsimV57Soap12.remoteMethod('CreateIndicium',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'CreateIndicium',
       type: 'CreateIndicium',
       description: 'CreateIndicium',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'CreateIndiciumResponse',
       description: 'CreateIndiciumResponse',
       root: true } ],
  http: { verb: 'post', path: '/CreateIndicium' },
  description: 'CreateIndicium' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('CreateEnvelopeIndicium',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'CreateEnvelopeIndicium',
       type: 'CreateEnvelopeIndicium',
       description: 'CreateEnvelopeIndicium',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'CreateEnvelopeIndiciumResponse',
       description: 'CreateEnvelopeIndiciumResponse',
       root: true } ],
  http: { verb: 'post', path: '/CreateEnvelopeIndicium' },
  description: 'CreateEnvelopeIndicium' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('CreateUnfundedIndicium',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'CreateUnfundedIndicium',
       type: 'CreateUnfundedIndicium',
       description: 'CreateUnfundedIndicium',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'CreateUnfundedIndiciumResponse',
       description: 'CreateUnfundedIndiciumResponse',
       root: true } ],
  http: { verb: 'post', path: '/CreateUnfundedIndicium' },
  description: 'CreateUnfundedIndicium' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetRates',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetRates',
       type: 'GetRates',
       description: 'GetRates',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetRatesResponse',
       description: 'GetRatesResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetRates' },
  description: 'GetRates' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('CleanseAddress',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'CleanseAddress',
       type: 'CleanseAddress',
       description: 'CleanseAddress',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'CleanseAddressResponse',
       description: 'CleanseAddressResponse',
       root: true } ],
  http: { verb: 'post', path: '/CleanseAddress' },
  description: 'CleanseAddress' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('CreateMailingLabelIndicia',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'CreateMailingLabelIndicia',
       type: 'CreateMailingLabelIndicia',
       description: 'CreateMailingLabelIndicia',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'CreateMailingLabelIndiciaResponse',
       description: 'CreateMailingLabelIndiciaResponse',
       root: true } ],
  http: { verb: 'post', path: '/CreateMailingLabelIndicia' },
  description: 'CreateMailingLabelIndicia' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('CreateNetStampsIndicia',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'CreateNetStampsIndicia',
       type: 'CreateNetStampsIndicia',
       description: 'CreateNetStampsIndicia',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'CreateNetStampsIndiciaResponse',
       description: 'CreateNetStampsIndiciaResponse',
       root: true } ],
  http: { verb: 'post', path: '/CreateNetStampsIndicia' },
  description: 'CreateNetStampsIndicia' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('RegisterAccount',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'RegisterAccount',
       type: 'RegisterAccount',
       description: 'RegisterAccount',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'RegisterAccountResponse',
       description: 'RegisterAccountResponse',
       root: true } ],
  http: { verb: 'post', path: '/RegisterAccount' },
  description: 'RegisterAccount' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('CreateScanForm',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'CreateScanForm',
       type: 'CreateScanForm',
       description: 'CreateScanForm',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'CreateScanFormResponse',
       description: 'CreateScanFormResponse',
       root: true } ],
  http: { verb: 'post', path: '/CreateScanForm' },
  description: 'CreateScanForm' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('PriceOrder',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'PriceOrder',
       type: 'PriceOrder',
       description: 'PriceOrder',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'PriceOrderResponse',
       description: 'PriceOrderResponse',
       root: true } ],
  http: { verb: 'post', path: '/PriceOrder' },
  description: 'PriceOrder' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('PlaceOrder',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'PlaceOrder',
       type: 'PlaceOrder',
       description: 'PlaceOrder',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'PlaceOrderResponse',
       description: 'PlaceOrderResponse',
       root: true } ],
  http: { verb: 'post', path: '/PlaceOrder' },
  description: 'PlaceOrder' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetShipmentList',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetShipmentList',
       type: 'GetShipmentList',
       description: 'GetShipmentList',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetShipmentListResponse',
       description: 'GetShipmentListResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetShipmentList' },
  description: 'GetShipmentList' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetShipmentListByToken',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetShipmentListByToken',
       type: 'GetShipmentListByToken',
       description: 'GetShipmentListByToken',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetShipmentListByTokenResponse',
       description: 'GetShipmentListByTokenResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetShipmentListByToken' },
  description: 'GetShipmentListByToken' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('ChangePlan',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'ChangePlan',
       type: 'ChangePlan',
       description: 'ChangePlan',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'ChangePlanResponse',
       description: 'ChangePlanResponse',
       root: true } ],
  http: { verb: 'post', path: '/ChangePlan' },
  description: 'ChangePlan' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetBalanceHistory',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetBalanceHistory',
       type: 'GetBalanceHistory',
       description: 'GetBalanceHistory',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetBalanceHistoryResponse',
       description: 'GetBalanceHistoryResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetBalanceHistory' },
  description: 'GetBalanceHistory' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetBalanceHistoryByToken',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetBalanceHistoryByToken',
       type: 'GetBalanceHistoryByToken',
       description: 'GetBalanceHistoryByToken',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetBalanceHistoryByTokenResponse',
       description: 'GetBalanceHistoryByTokenResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetBalanceHistoryByToken' },
  description: 'GetBalanceHistoryByToken' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('PurchasePostage',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'PurchasePostage',
       type: 'PurchasePostage',
       description: 'PurchasePostage',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'PurchasePostageResponse',
       description: 'PurchasePostageResponse',
       root: true } ],
  http: { verb: 'post', path: '/PurchasePostage' },
  description: 'PurchasePostage' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('CancelIndicium',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'CancelIndicium',
       type: 'CancelIndicium',
       description: 'CancelIndicium',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'CancelIndiciumResponse',
       description: 'CancelIndiciumResponse',
       root: true } ],
  http: { verb: 'post', path: '/CancelIndicium' },
  description: 'CancelIndicium' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetURL',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetURL',
       type: 'GetURL',
       description: 'GetURL',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetURLResponse',
       description: 'GetURLResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetURL' },
  description: 'GetURL' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('SetCodeWords',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'SetCodeWords',
       type: 'SetCodeWords',
       description: 'SetCodeWords',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'SetCodeWordsResponse',
       description: 'SetCodeWordsResponse',
       root: true } ],
  http: { verb: 'post', path: '/SetCodeWords' },
  description: 'SetCodeWords' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('CarrierPickup',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'CarrierPickup',
       type: 'CarrierPickup',
       description: 'CarrierPickup',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'CarrierPickupResponse',
       description: 'CarrierPickupResponse',
       root: true } ],
  http: { verb: 'post', path: '/CarrierPickup' },
  description: 'CarrierPickup' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('SetAutoBuy',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'SetAutoBuy',
       type: 'SetAutoBuy',
       description: 'SetAutoBuy',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'SetAutoBuyResponse',
       description: 'SetAutoBuyResponse',
       root: true } ],
  http: { verb: 'post', path: '/SetAutoBuy' },
  description: 'SetAutoBuy' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('EnumCodeWordTypes',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'EnumCodeWordTypes',
       type: 'EnumCodeWordTypes',
       description: 'EnumCodeWordTypes',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'EnumCodeWordTypesResponse',
       description: 'EnumCodeWordTypesResponse',
       root: true } ],
  http: { verb: 'post', path: '/EnumCodeWordTypes' },
  description: 'EnumCodeWordTypes' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('RecoverUsername',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'RecoverUsername',
       type: 'RecoverUsername',
       description: 'RecoverUsername',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'RecoverUsernameResponse',
       description: 'RecoverUsernameResponse',
       root: true } ],
  http: { verb: 'post', path: '/RecoverUsername' },
  description: 'RecoverUsername' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetSupportedCountries',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetSupportedCountries',
       type: 'GetSupportedCountries',
       description: 'GetSupportedCountries',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetSupportedCountriesResponse',
       description: 'GetSupportedCountriesResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetSupportedCountries' },
  description: 'GetSupportedCountries' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('ChangePassword',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'ChangePassword',
       type: 'ChangePassword',
       description: 'ChangePassword',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'ChangePasswordResponse',
       description: 'ChangePasswordResponse',
       root: true } ],
  http: { verb: 'post', path: '/ChangePassword' },
  description: 'ChangePassword' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetNetStampsImages',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetNetStampsImages',
       type: 'GetNetStampsImages',
       description: 'GetNetStampsImages',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetNetStampsImagesResponse',
       description: 'GetNetStampsImagesResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetNetStampsImages' },
  description: 'GetNetStampsImages' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetChangePlanStatus',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetChangePlanStatus',
       type: 'GetChangePlanStatus',
       description: 'GetChangePlanStatus',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetChangePlanStatusResponse',
       description: 'GetChangePlanStatusResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetChangePlanStatus' },
  description: 'GetChangePlanStatus' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('ResubmitPurchase',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'ResubmitPurchase',
       type: 'ResubmitPurchase',
       description: 'ResubmitPurchase',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'ResubmitPurchaseResponse',
       description: 'ResubmitPurchaseResponse',
       root: true } ],
  http: { verb: 'post', path: '/ResubmitPurchase' },
  description: 'ResubmitPurchase' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('EnumNetStampsLayouts',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'EnumNetStampsLayouts',
       type: 'EnumNetStampsLayouts',
       description: 'EnumNetStampsLayouts',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'EnumNetStampsLayoutsResponse',
       description: 'EnumNetStampsLayoutsResponse',
       root: true } ],
  http: { verb: 'post', path: '/EnumNetStampsLayouts' },
  description: 'EnumNetStampsLayouts' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('EnumCostCodes',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'EnumCostCodes',
       type: 'EnumCostCodes',
       description: 'EnumCostCodes',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'EnumCostCodesResponse',
       description: 'EnumCostCodesResponse',
       root: true } ],
  http: { verb: 'post', path: '/EnumCostCodes' },
  description: 'EnumCostCodes' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('AuthenticateWithTransferAuthenticator',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'AuthenticateWithTransferAuthenticator',
       type: 'AuthenticateWithTransferAuthenticator',
       description: 'AuthenticateWithTransferAuthenticator',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'AuthenticateWithTransferAuthenticatorResponse',
       description: 'AuthenticateWithTransferAuthenticatorResponse',
       root: true } ],
  http: { verb: 'post', path: '/AuthenticateWithTransferAuthenticator' },
  description: 'AuthenticateWithTransferAuthenticator' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('StartPasswordReset',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'StartPasswordReset',
       type: 'StartPasswordReset',
       description: 'StartPasswordReset',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'StartPasswordResetResponse',
       description: 'StartPasswordResetResponse',
       root: true } ],
  http: { verb: 'post', path: '/StartPasswordReset' },
  description: 'StartPasswordReset' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('FinishPasswordReset',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'FinishPasswordReset',
       type: 'FinishPasswordReset',
       description: 'FinishPasswordReset',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'FinishPasswordResetResponse',
       description: 'FinishPasswordResetResponse',
       root: true } ],
  http: { verb: 'post', path: '/FinishPasswordReset' },
  description: 'FinishPasswordReset' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetCodewordQuestions',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetCodewordQuestions',
       type: 'GetCodewordQuestions',
       description: 'GetCodewordQuestions',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetCodewordQuestionsResponse',
       description: 'GetCodewordQuestionsResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetCodewordQuestions' },
  description: 'GetCodewordQuestions' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('VoidUnfundedIndicium',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'VoidUnfundedIndicium',
       type: 'VoidUnfundedIndicium',
       description: 'VoidUnfundedIndicium',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'VoidUnfundedIndiciumResponse',
       description: 'VoidUnfundedIndiciumResponse',
       root: true } ],
  http: { verb: 'post', path: '/VoidUnfundedIndicium' },
  description: 'VoidUnfundedIndicium' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('FundUnfundedIndicium',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'FundUnfundedIndicium',
       type: 'FundUnfundedIndicium',
       description: 'FundUnfundedIndicium',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'FundUnfundedIndiciumResponse',
       description: 'FundUnfundedIndiciumResponse',
       root: true } ],
  http: { verb: 'post', path: '/FundUnfundedIndicium' },
  description: 'FundUnfundedIndicium' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('AuthenticateUser',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'AuthenticateUser',
       type: 'AuthenticateUser',
       description: 'AuthenticateUser',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'AuthenticateUserResponse',
       description: 'AuthenticateUserResponse',
       root: true } ],
  http: { verb: 'post', path: '/AuthenticateUser' },
  description: 'AuthenticateUser' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetAccountInfo',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetAccountInfo',
       type: 'GetAccountInfo',
       description: 'GetAccountInfo',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetAccountInfoResponse',
       description: 'GetAccountInfoResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetAccountInfo' },
  description: 'GetAccountInfo' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('GetPurchaseStatus',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetPurchaseStatus',
       type: 'GetPurchaseStatus',
       description: 'GetPurchaseStatus',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetPurchaseStatusResponse',
       description: 'GetPurchaseStatusResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetPurchaseStatus' },
  description: 'GetPurchaseStatus' }
  );
  
  SwsimV57SwsimV57Soap12.remoteMethod('TrackShipment',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'TrackShipment',
       type: 'TrackShipment',
       description: 'TrackShipment',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'TrackShipmentResponse',
       description: 'TrackShipmentResponse',
       root: true } ],
  http: { verb: 'post', path: '/TrackShipment' },
  description: 'TrackShipment' }
  );
  
}
