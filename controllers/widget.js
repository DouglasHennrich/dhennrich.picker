/*
@ args
*/
var args = {}
  , selectedRow = null
  ;

/*
@ _init
*/
function _init(){
    args = arguments[0];

    if(args.selectTitle) $.DHpickerSelecionarBtn.title = args.selectTitle;
    if(args.cancelTitle) $.DHpickerCancelarBtn.title = args.cancelTitle;

    _populatePicker();
};

/*
@ _show
*/
function _show(){
    $.DHpickerBG.show();

    $.DHpickerView.animate({
        bottom: 0
      , duration: 300
    });
};

/*
@ cleanUp
*/
function cleanUp(){
    $.DHpickerView.animate({
        bottom: -260
      , duration: 300
    },function(){
        $.DHpicker.data = [];
        $.DHpickerBG.hide();
    });
};

/*
@ _cancelFunc
*/
function _cancelFunc(){
    if(args.cancelFunc){
        args.cancelFunc();
        return;
    }
    cleanUp();
};

/*
@ _selectFunc
*/
function _selectFunc(){
    cleanUp();
    args.selectFunc({
        result: selectedRow
    });
};

/*
@ _touchRow
*/
function _touchRow(event){
    var _eventData = (OS_IOS) ? event.rowData : event.row
      , rows = $.DHpicker.sections[0].getRows()
      , rowIndex = _eventData.id
      ;

    // console.log('_eventData: ', JSON.stringify(_eventData));

    for(var i = 0, Length = rows.length; i < Length; i++){
        if(i == rowIndex){
            _eventData.children[0].show();
            selectedRow = _eventData.json.data;
        }else{
            rows[i].children[0].hide();
        }
    }
};

/*
@ _populatePicker
*/
function _populatePicker(){
    var json = args.data
      , tempData = []
      ;

    for(var i = 0, Length = json.length; i < Length; i++){
        var row = Ti.UI.createTableViewRow({
            height: 45
          , json: json[i]
          , id: i
        });

        if(i == 0){
            selectedRow = row.json.data;

            // Toggle
            row.add(Ti.UI.createView({
                zIndex: 1
              , backgroundColor: "#e90000"
              , visible: true
              , opacity: 0.5
            }));
        }else{

            // Toggle
            row.add(Ti.UI.createView({
                zIndex: 1
              , backgroundColor: "#e90000"
              , visible: false
              , opacity: 0.5
            }));
        }

        // Title
        row.add(Ti.UI.createLabel({
            text: json[i].title
          , color: "#000"
          , font: { fontSize: 16, fontFamily: "OpenSans" }
          , left: "5%"
          , right: "5%"
          , height: 30
          , textAlign: "center"
        }));

        tempData[i] = row;
    }

    //
    $.DHpicker.data = tempData;

    //
    _show();
};

/*
@ Export
*/
exports.show = _init;

/*
@
*/
/*
@
*/
