import { addExpense ,removeExpense ,editExpense} from '../../actions/expenses'

test('should generate add expense action obj',()=>{
    const result = removeExpense({id:'123abc'})
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})
test('should generate edit expense action obj',()=>{
    const result = editExpense('123abcd' , {})
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abcd',
        updates:{}
    })
})


test('should generate add exp obj with provided value' , ()=>{
    const expData ={
        description : 'rent',
        amount:1000,
        createdAt : 1000,
        note :'this was the last month rent'
    }

    const action = addExpense(expData)
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...expData,
            id:expect.any(String)
        }
    })
})
test('should generate add exp obj with default value' , ()=>{
    const expData ={
        description : '',
        amount:0,
        createdAt : 0,
        note :''
    }

    const action = addExpense()
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...expData,
            id:expect.any(String)
        }
    })
})
