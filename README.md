## Quick Start

### Get it [![gitTio](http://gitt.io/badge.svg)](http://gitt.io/component/dhennrich.picker)
Download this repository and consult the [Alloy Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_XML_Markup-section-35621528_AlloyXMLMarkup-ImportingWidgets) on how to install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install dhennrich.picker`

## How it looks like

![.Imagem](/assets/imagem.png)


### XML

Add the widget below all your code.
```xml
<Alloy>
    <Window>
        <View>
            <Label id="Label">Something</Label>
        </View>

        <!-- Picker -->
        <Widget src="dhennrich.picker" id="picker"/>
    </Window>
</Alloy>
```

### JS

When you want to display an alert

```js
/*
@ formData
*/
function formData(json){
    var _arr = [];

    console.log('json: ', json);

    for(var i = 0; i < json.length; i++){
        _arr[i] = {
            title: json[i].title
          , data: json[i]
        }
    }

    /*
    _arr[json.length] = {
        title: "Custom Option"
      , data: null
    }
    */

    return _arr;
};

/*
@ _callbackSelect
*/
function _callbackSelect(){
    var _args = arguments[0] || {};

    if(_args.result/* _arr[i].data */){

        // Do something with selected data ( previous json[i])
    }else{

        // Do something with custom option ( previous _arr[json.length] )
    }
};

//
$.picker.show({
    data: formData(yourArr)
  , selectFunc: _callbackSelect
  , selectTitle: "Custom Select Title"
  /*
  , cancelFunc: _callbackCancel
  , cancelTitle: "Custom Cancel Title"
  */
});
```

### TSS
You can customize your picker on `app.tss` file.

* `#DHpickerBG` is the role background of the view.

```css
{
    backgroundColor: "#8000"
}
```

* `#DHpickerView` is the background of picker.

```css
{
    backgroundColor: "#fff"
}
```

* `#DHpickerCancelarBtn` and `#DHpickerSelecionarBtn` are cancel and select button.

### Exposed Function

* show

$.`idWidget`.show({
    data: formData(`array`)
  , selectFunc: `callback`
})
