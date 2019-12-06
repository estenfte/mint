
//
// editTransaction
// Description: Used to iniate the editting of a transaction
//

function editTransaction(tid) {
  document.getElementById(tid).click()
  document.getElementById('txnEdit-toggle').click()
}


//
// setDescription
// Description: Sets the description field
//

function setDescription(description){
    document.getElementById('txnEdit-merchant_input').value = description 
}


//
// setCategory
// Description: Sets the category
//

function setCategory(category) { 

    // get all possible categories to check against
    allCategories = populateAllCatagories()
    
    // if category valid, update category
    if (allCategories.indexOf(category) > -1) {
        document.getElementById('txnEdit-category_input').value = category
    }
}


//
// setNote
// Description: Sets the notes field
//

function setNote(noteText) {
    document.getElementById('txnEdit-note').value = noteText
    
}

//
// checkTag
// Description: Used to activate tag
//

function checkTag(tagName)
{

    //get list of all tags
    possibleTags = document.getElementById('txnEdit-tags').getElementsByTagName('input')
    
    //loop over all tag elements
    for (let tagElement of possibleTags) {
        
        //check if tag matches desired tag
        if (tagElement.parentElement.title === tagName) {
            
            //if not activated, click to activate
            if (tagElement.value === "0") {
                
                tagElement.parentElement.click()
                
            }
        }
    }
           
}

//
// saveTransactionChanges
// Description: Saves all changes made to the current transaction
//

function saveTransactionChanges() {
     document.getElementById('txnEdit-submit').click()
}

//
// splitTransaction
// Description: Splits the transaction into multiple transactions
//
    
function splitTransaction(transactions) {
    
    // Element that contains all the form fields
    splitTable = document.getElementById('pop-split-main-table')
    
    // Click split transaction button   
    document.getElementById('txnEdit-split-icon').click()     
        
    // Add enough inputs for all transactions
    for (var i = 2; i < transactions.length; i++) { addAdditionalSplit() }
    
    // Get input elements
    dElements = splitTable.getElementsByClassName('descrip-cell')
    cElements = splitTable.getElementsByClassName('category-cell')
    aElements = splitTable.getElementsByClassName('innerAmount')
    
     
    // Fill out transaction information
    for (var i = 0; i < transactions.length; i++) {
        dElements[i+1].getElementsByTagName('input')[0].value = transactions[i][0]
        cElements[i+1].getElementsByTagName('input')[0].value = transactions[i][1]
        aElements[i+1].getElementsByTagName('input')[0].value = transactions[i][2]
    }
    
    // Save split
    document.getElementById('pop-split-submit').click()
    
    
}

//
// addAdditionalSplit
// Description: Adds additional transaction for split
//

function addAdditionalSplit()
{
    // initialize splitButton
    splitButton = null
    
    // get all link elements in split input table
    possibleButtons = splitTable.getElementsByTagName('a')

    // use the last split button as the used split button
    for (let possibleButton of possibleButtons) {
        if (possibleButton.name === 'split') {
            splitButton = possibleButton
        }
    }
    
    // click the split button
    splitButton.click()
    
}

//
// populateAllCatagories
// Description: Gets all categories for validation
//

function populateAllCatagories() {
    
    // initialize output array
    var allCategories = []
    
    // get all menu catagory links
    linkElements = document.getElementById('menu-category').getElementsByTagName('a')

    // search for links of menu catagories
    for (let elment of linkElements) {
        if (elment.parentElement.id.contains('menu-category')) {
            allCategories.push(elment.text)
        }
        
    }
    
    // return catagories
    return allCategories
    
}
















function superTest () {
    
    editTransaction('transaction-1272058554')
    setDescription('Fitbit for Christmas')
    setCategory('Hotel')
    setNote('Great gift for christmas')
    checkTag('Accepted')
    saveTransactionChanges()
}

function testSplit () {
    
        editTransaction('transaction-1272058554')

        transactions = [['Fitbit 1', 'Gift', '50'], ['Fitbit 2', 'Hotel', '50'], ['fitbit 3', 'Shopping', '10'], ['fitbit 4', 'Shopping', '28.4']]
        
        splitTransaction(transactions)
}
    
    
    
    
    
    