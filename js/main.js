//pie chart 1 Shows how much of the year is completed
function currentDayInYear() {
	var now = new Date();  //Get Today's Date
	var start = new Date(now.getFullYear(), 0, 0); //Get date at start of this year
	var diff = now - start; //Calculate difference between today and start of the year
	var oneDay = 1000 * 60 * 60 * 24; //Calculate the number of milli-seconds in 1 day

	return Math.floor(diff / oneDay); //Calculates the %
}

var data = {
  series: [currentDayInYear(), 365-currentDayInYear()]
};

new Chartist.Pie('#chart1', data, {
    labelInterpolationFnc: function(value) {
  }
});

//pie chart 2 - show students pass rate
function getRandomNumber() {
    var x = Math.random();
    return x;
}

var data2 = {
  series: [getRandomNumber(),1 - getRandomNumber()]
};


new Chartist.Pie('#chart2', data2, {
    labelInterpolationFnc: function(value) {
  }
});

//pie chart 3 - show students pass rate
var data3 = {
    series: [getRandomNumber(),1 - getRandomNumber()]
}
new Chartist.Pie('#chart3', data3, {
    labelInterpolationFnc: function(value) {
  }
});

//table and main
var users = [{Name: 'student', Subject: 'subject', Contact: 'contact', Medical: 'medical'}];
var info = [{Name: 'name', Subject: 'subject', Contact: 'contact', Medical: 'medical'}];

var templates = [
{ id: 2, name: 'Light Theme', value: 'css/light.css'}, //light theme templete .css
  { id: 1, name: 'Dark Theme', value: 'css/dark.css'} //dark theme templete .css
];

//vue js functions
var app = new Vue({
    el: '#app',
    data: {
    info: info,  
    users: users,  
    templates: templates,
    current_template: templates[0]
  },
    
  methods: {
    setTemplate: function(id){
      var selected_template = this.templates.filter(function(ele){
      return (ele.id == id)
      })[0];

      this.current_template = selected_template;
    },
      
     //table header static info 
    tableHeader: function(tableData) {
      var keys = [];
      for(key in tableData[0]){
      keys.push(key);
      }
      return keys;
    },
	
      //table content with add rows button
    tableContent: function(tableData) {
      var keys = [];
      for(key in tableData[0]){
      keys.push(key);
      }
      return keys;
    },
	  
	addRow: function (rows, value) {
    	rows.push({Name: 'name', Subject: 'subject', Contact: 'contact', Medical: 'medical'});
},
	removeRow: function (rows, value) {
    	rows.splice(value, 1);
	}
  }	
});
