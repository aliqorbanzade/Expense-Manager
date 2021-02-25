import moment from 'moment'
import {setStartDate , setEndDate ,sortByAmount ,sortByDate ,setTextFilter} from '../../actions/filters'

test('should generate set start date obj' , ()=>{
    const action =setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',  
        startDate : moment(0)
    })
})
test('should generate set end date obj' , ()=>{
    const action =setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',  
        endDate : moment(0)
    })
})
//challenge 

test('should generate sort by amount date obj' , ()=>{
    const action =sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})
test('should generate set sort by date obj' , ()=>{
    const action =sortByDate(moment(0))
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('should generate set text filter with default obj' , ()=>{
    const action =setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',  
        text : ''
    })
})

test('should generate set text filter with provided value obj' , ()=>{
    const action =setTextFilter('my text')
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',  
        text : 'my text'
    })
})