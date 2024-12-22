const express = require('express');

const router = express.Router();
const adminControl = require('../control/adminController');
const { adminmiddleware } = require('../middleware/adminmiddleware');

router.post('/login', adminControl.login);

router.get('/getCompaniesUser', adminmiddleware, adminControl.getCompaniesUser);
router.post('/createCompanyUser', adminmiddleware, adminControl.createCompanyUser);
router.post('/updateCompanyUser', adminmiddleware, adminControl.updateCompanyUser);
router.post('/deleteCompanyUser', adminmiddleware, adminControl.deleteCompanyUser);

router.get('/getUsers', adminmiddleware, adminControl.getUsers);
router.post('/getUsersByEmail', adminmiddleware, adminControl.getUsersByEmail);
router.post('/createUser', adminmiddleware, adminControl.createUser);
router.post('/updateUser', adminmiddleware, adminControl.updateUser);
router.post('/deleteUser', adminmiddleware, adminControl.deleteUser);

router.get('/getAPIs', adminmiddleware, adminControl.getAPIs);
router.post('/createAPI', adminmiddleware, adminControl.createAPI);
router.post('/updateAPI', adminmiddleware, adminControl.updateAPI);
router.post('/deleteAPI', adminmiddleware, adminControl.deleteAPI);

router.get('/getSymbols', adminmiddleware, adminControl.getSymbols);
router.post('/updateSymbol', adminmiddleware, adminControl.updateSymbol);
router.post('/createSymbol', adminmiddleware, adminControl.createSymbol);
router.post('/deleteSymbol', adminmiddleware, adminControl.deleteSymbol);

router.get('/getAssets', adminmiddleware, adminControl.getAssets);
router.post('/updateAsset', adminmiddleware, adminControl.updateAsset);
router.post('/createAsset', adminmiddleware, adminControl.createAsset);
router.post('/deleteAsset', adminmiddleware, adminControl.deleteAsset);

router.get('/getCompanies', adminmiddleware, adminControl.getCompanies);
router.post('/createCompany', adminmiddleware, adminControl.createCompany);
router.post('/updateCompany', adminmiddleware, adminControl.updateCompany);
router.post('/deleteCompany', adminmiddleware, adminControl.deleteCompany);

router.get('/getCommissions', adminmiddleware, adminControl.getCommissions);
router.post('/updateCommission', adminmiddleware, adminControl.updateCommission);
router.post('/createCommission', adminmiddleware, adminControl.createCommission);
router.post('/deleteCommission', adminmiddleware, adminControl.deleteCommission);

router.get('/getLeverages', adminmiddleware, adminControl.getLeverages);
router.post('/updateLeverage', adminmiddleware, adminControl.updateLeverage);
router.post('/createLeverage', adminmiddleware, adminControl.createLeverage);
router.post('/deleteLeverage', adminmiddleware, adminControl.deleteLeverage);

router.get('/getPositions', adminmiddleware, adminControl.getPositions);

router.get('/getFormula', adminmiddleware, adminControl.getFormula);
router.get('/getFormulaCalculate', adminControl.getFormulaCalculate);
router.get('/getPLCalculate', adminControl.getPLCalculate);

module.exports = router;