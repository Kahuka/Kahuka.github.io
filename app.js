var app = new Vue({
    el: '#app',
    data: {
      maxNumbrid: false,
      numCount: 0,
      cardLog: 1,
      awnser: '',
      number: '',
      total: null,
      totals: '',
      oldTotal: 0,
      oldTotalS: '0',
      vahe: null,

      monthYearSt: false,
      month: 1,
      monthSt: false,
      year: 1990,
      yearSt: false,
      expired: false,

      cvc: "",
      cvcSt: false,

      name: "",
      nameSt: false,
      reverseName: ""

    },
    methods: {
        calculateTotal() {
            this.totals += this.number;
            this.total = parseInt(this.totals);
            this.vahe = this.total - this.oldTotal;
        },
        vaheArvutus() {
            if(this.vahe == this.awnser){
                this.number = null;
                this.awnser = null;
                this.numCount += 1;

                this.oldTotalS = this.totals;
                this.oldTotal = this.total;
                if(this.numCount >= 15) {
                    this.maxNumbrid = true;
                    this.cardLog += 1;
                }

            } else {
                this.restart();
            }
        },
        restart() {
            this.maxNumbrid = false;
            this.numCount = 0;
            this.awnser = '';
            this.number = '';
            this.total = null;
            this.totals = '';
            this.oldTotal = 0;
            this.oldTotalS = '0';
            this.vahe = null;
        
            this.monthYearSt= false;
            this.month = 1;
            this.monthSt = false;
            this.year = 1900;
            this.yearSt = false;
            this.expired = false;

            this.cvc = "";
            this.cvcSt = false;
            this.cardLog = 1;

            this.name = "";
            this.nameSt = false;
            this.reverseName = "";
        },
        checkDate() {
            if(this.year > new Date().getFullYear()){
                this.monthYearSt = true;
                this.cardLog += 1;
            } else if(this.month >= new Date().getMonth()){
                this.monthYearSt = true;
                this.cardLog += 1;
            } else {
                this.expired = true;
            }
        },
        rightButton() {
            if(Math.floor(Math.random() * 4 ) == 1 ) {
                if(this.cvc >= 100 && this.cvc <= 999) {
                    cvcSt = true;
                    this.cardLog += 1;
                }
            } else {
                this.restart()
            }
        },
        nameReverse() {
            this.reverseName = this.name.split('').reverse().join('')
            
        },
        theEnd() {
            this.nameSt = true;
            this.cardLog += 1;
        }
    }
})
