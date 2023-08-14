import Litepicker from "../utils/litepickerjs";
console.log(Litepicker)
export function lightpicker(){
    let input = document.getElementById('calender_select')
    if (input !==null) {
      let picker = new Litepicker({
        element: input,
        format: 'DD/MM/YYYY',
        singleMode: false,
        splitView:false,
        scrollToDate:true,
        numberOfMonths: 1,
        dropdowns: {
        minYear: 1990,
        maxYear: null,
        months: true,
        years: false
      },
        startDate: new Date().getTime(), 
        endDate: new Date().getTime(),
        // onSelect: function(date1,date2) { console.log(date1, date2) }
    })
    } else {
      console.log("id not defined")
    }
}