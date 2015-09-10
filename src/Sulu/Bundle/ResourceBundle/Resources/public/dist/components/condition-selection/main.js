define([],function(){"use strict";var a=0,b=1,c=2,d=3,e=4,f={operatorsUrl:null,fieldsUrl:null,eventNamespace:"sulu.condition-selection",dataAttribute:"condition-selection",instanceName:"condition",translations:{addButton:"resource.filter.add-condition"},data:[],validationSelector:null},g={container:function(a,b){return['<div class="',a,'" id="',b,'" style="display:none"></div>'].join("")},button:function(a,b){return['<div class="grid-row">','   <div class="grid-col-3">','       <div id="',a,'" class="btn action">','           <span class="fa-plus-circle"></span>','           <span class="text">',b,"</span>","       </div>","   </div>","</div>"].join("")},row:function(a,b){return['<div class="',a,' grid-row" data-id="',b,'"></div>'].join("")},removeButton:function(a){return['<div class="grid-col-1 align-center pointer ',a,'">','<span class="fa-minus-circle m-top-7"></span>',"</div>"].join("")},input:function(a,b){return['<input data-validation-required="true" class="form-element husky-validate ',b,'" type="text" value="',a,'">'].join("")},col:function(a){return['<div class="',a,'"></div>'].join("")},select:function(a){return['<select data-validation-required="true" class="form-element husky-validate ',a,'"></select>'].join("")}},h={valueInputClass:"value-input",conditionContainerClass:"conditions-container",conditionRowClass:"condition-row",operatorSelectClass:"operator-select",fieldSelectClass:"field-select",removeButtonClass:"condition-remove"},i=function(){return l.call(this,"initialized")},j=function(){return"data-changed"},k=function(){return l.call(this,"data-changed")},l=function(a){return this.options.eventNamespace+"."+(this.options.instanceName?this.options.instanceName+".":"")+a},m=function(){var a=this.sandbox.dom.createElement('<div id="'+this.options.ids.loader+'"></div>');this.sandbox.dom.append(this.options.el,a),this.sandbox.start([{name:"loader@husky",options:{el:a,size:"100px",color:"#cccccc"}}])},n=function(){this.sandbox.stop("#"+this.options.ids.loader)},o=function(){this.options.data&&this.options.data.length>0&&this.options.data.forEach(function(a){p.call(this,a)}.bind(this))},p=function(a){var b,c,d,e,f,i,j={},k=[],l=a?a.id:"new";b=this.sandbox.dom.createElement(g.row(h.conditionRowClass,l)),c=this.sandbox.dom.createElement(g.removeButton(h.removeButtonClass)),a?(j=a.conditions[0],k=C.call(this,j.type),d=v.call(this,j.field,!1,!0)):d=v.call(this,j.field,!0,!0),f=y.call(this,j.operator,j.type),e=q.call(this,f,k,!1,!0),i=w.call(this,a,f,"grid-col-4",!0),this.sandbox.dom.append(b,c),this.sandbox.dom.append(b,d),this.sandbox.dom.append(b,e),this.sandbox.dom.append(b,i),this.sandbox.dom.append(this.$container,b)},q=function(a,b,c,d){var e,f=E.call(this,a?a.id:null,"id","name",b,h.operatorSelectClass,c);return a&&this.sandbox.dom.data(f,"type",a.type),d?(e=this.sandbox.dom.createElement(g.col("grid-col-3")),this.sandbox.dom.append(e,f),e):f},r=function(a){var b;a&&(this.usedFields[a]?(b=this.usedFields[a],delete this.usedFields[a],this.fields[a]=b):this.sandbox.logger.error("Field "+a+" could not be found in used fields!"))},s=function(a){var b;this.fields[a]?(b=this.fields[a],delete this.fields[a],this.usedFields[a]=b):this.sandbox.logger.error("Field "+a+" could not be found in fields!")},t=function(a){var b=this.sandbox.dom.find("."+h.fieldSelectClass,this.$el);this.sandbox.util.foreach(b,function(b){b!==a&&u.call(this,b)}.bind(this))},u=function(a){var b,c=this.sandbox.dom.find("option",a),d=this.sandbox.dom.val(a),e=!1;this.sandbox.dom.val(c[0])||(e=!0),this.sandbox.dom.remove(c),c=F.call(this,d,"name","translation",this.fields,e),d&&(this.fields[d]||(b=this.sandbox.translate(this.usedFields[d].translation),c.push('<option value="'+this.usedFields[d].name+'" selected>'+b+"</option>")),this.sandbox.dom.append(a,c.join("")))},v=function(a,b,c){var d,e=E.call(this,a,"name","translation",this.fields,h.fieldSelectClass,b);return a&&(s.call(this,a),t.call(this,e[0]),this.sandbox.dom.data(e,"value",a)),c?(d=this.sandbox.dom.createElement(g.col("grid-col-4")),this.sandbox.dom.append(d,e),d):e},w=function(a,b,c,d){var e,f,i,j=null;return a&&b?a.conditions.length>1?this.sandbox.logger.error("Multiple conditions not yet supported!"):(f=a.conditions[0],j=z.call(this,b,f.value),i=f.id):j=!a&&b?z.call(this,b,""):B.call(this,"",h.valueInputClass),this.options.validationSelector&&this.sandbox.form.addField(this.options.validationSelector,j),this.sandbox.dom.data(j,"id",i),d?(e=this.sandbox.dom.createElement(g.col(c)),this.sandbox.dom.append(e,j),e):j},x=function(a){var b=null;return a=parseInt(a),this.operators.forEach(function(c){return c.id===a?(b=c,!1):void 0}.bind(this)),b},y=function(a,b){var c=null;return"string"==typeof b&&(b=D.call(this,b)),this.operators.forEach(function(d){return d.operator===a&&d.type===b?(c=d,!1):void 0}.bind(this)),c},z=function(a,b){switch(a.inputType){case"date":case"datepicker":return A.call(this,b,h.valueInputClass);case"select":case"boolean":case"radio":case"checkbox":return E.call(this,b,"value","name",a.values,h.valueInputClass,!0);case"":case"simple":return B.call(this,b,h.valueInputClass);default:this.sandbox.logger.error('Input type "'+type+'" is not supported!')}},A=function(a,b){var c,d=this.sandbox.dom.createElement('<div data-value="'+a+'" class="'+b+'"></div>'),e=this.sandbox.data.deferred();return this.deferreds.push(e),c="cs-datepicker"+this.deferreds.length,this.sandbox.start([{name:"input@husky",options:{el:d,datepickerOptions:{startDate:"1900-01-01",endDate:new Date},skin:"date",value:a,instanceName:c}}]),this.sandbox.on("husky.input."+c+".initialized",function(){e.resolve()}.bind(this)),d},B=function(a,b){return this.sandbox.dom.createElement(g.input(a,b))},C=function(b){var c=[];return b="string"==typeof b?D.call(this,b):b||a,this.operators.forEach(function(a){a.type===b&&c.push(a)}.bind(this)),c},D=function(a){switch(a){case"string":return b;case"number":case"integer":case"float":return c;case"boolean":return e;case"date":case"datetime":return d;default:return this.sandbox.logger.error('Unsupported type "'+a+'" found!'),null}},E=function(a,b,c,d,e,f){var h=F.call(this,a,b,c,d,f),i=this.sandbox.dom.createElement(g.select.call(this,e));return this.options.validationSelector&&this.sandbox.form.addField(this.options.validationSelector,i),this.sandbox.dom.append(i,h.join("")),i},F=function(a,b,c,d,e){var f,g,h=[];e&&h.push('<option value=""></option>');for(f in d)d.hasOwnProperty(f)&&(g=this.sandbox.translate(d[f][c]),d[f][b]===a?h.push('<option value="'+d[f][b]+'" selected>'+g+"</option>"):h.push('<option value="'+d[f][b]+'">'+g+"</option>"));return h},G=function(){var a=this.sandbox.translate(this.options.translations.addButton),b=this.sandbox.dom.createElement(g.button.call(this,this.options.ids.addButton,a));this.sandbox.dom.append(this.options.el,b)},H=function(){this.sandbox.dom.on(this.options.el,"click",P.bind(this),"#"+this.options.ids.addButton),this.sandbox.dom.on(this.$container,"click",Q.bind(this),"."+h.removeButtonClass),this.sandbox.dom.on(this.$container,"change",O.bind(this),"."+h.fieldSelectClass),this.sandbox.dom.on(this.$container,"change",N.bind(this),"."+h.operatorSelectClass),this.sandbox.dom.on(this.$el,j.call(this),L.bind(this)),this.sandbox.dom.on(this.$container,"change",function(){U.call(this)}.bind(this),"select, input"),this.sandbox.dom.on(this.$container,"change",function(a){J.call(this,a)}.bind(this),"select."+h.operatorSelectClass),this.sandbox.dom.on(this.$container,"change",I.bind(this),"select."+h.fieldSelectClass)},I=function(a){var b=this.sandbox.dom.createElement(a.currentTarget),c=this.sandbox.dom.data(b,"value"),d=this.sandbox.dom.val(b);c&&r.call(this,c),d&&(s.call(this,d),t.call(this,b[0]),this.sandbox.dom.data(b,"value",d))},J=function(a){var b=a.currentTarget,c=this.sandbox.dom.val(b),d=x.call(this,c);this.sandbox.dom.data(b,"type",d.type)},K=function(){for(var a in this.usedFields)this.fields[a]=this.usedFields[a];this.usedFields={}},L=function(){var a=this.sandbox.dom.data(this.options.el,"condition-selection");K.call(this),M.call(this,a),U.call(this)},M=function(a){var b=this.sandbox.dom.find("."+h.conditionRowClass,this.$container);this.sandbox.dom.each(b,function(a,b){R.call(this,b)}.bind(this)),this.options.data=a,o.call(this)},N=function(a){var b=a.target.value,c=this.sandbox.dom.closest(a.target,"."+h.conditionRowClass),d=x.call(this,b),e=this.sandbox.dom.find("."+h.valueInputClass,c)[0],f=this.sandbox.dom.parent(e);this.options.validationSelector&&this.sandbox.form.removeField(this.options.validationSelector,e),this.sandbox.stop(e),this.sandbox.dom.remove(e),e=w.call(this,null,d,null,!1),this.sandbox.dom.append(f,e)},O=function(a){var b=a.target.value,c=this.fields[b],d=C.call(this,c.type),e=this.sandbox.dom.closest(a.target,"."+h.conditionRowClass),f=this.sandbox.dom.find("."+h.operatorSelectClass,e)[0],g=this.sandbox.dom.find("."+h.valueInputClass,e)[0],i=this.sandbox.dom.parent(f),j=this.sandbox.dom.parent(g);this.options.validationSelector&&(this.sandbox.form.removeField(this.options.validationSelector,g),this.sandbox.form.removeField(this.options.validationSelector,f)),this.sandbox.dom.remove(f),this.sandbox.stop(g),this.sandbox.dom.remove(g),f=q.call(this,null,d,!0,!1),g=w.call(this),this.sandbox.dom.append(i,f),this.sandbox.dom.append(j,g)},P=function(){p.call(this),this.sandbox.emit(k.call(this))},Q=function(a){var b=this.sandbox.dom.closest(a.currentTarget,"."+h.conditionRowClass),c=this.sandbox.dom.find("."+h.fieldSelectClass,b),d=this.sandbox.dom.data(c,"value");r.call(this,d),t.call(this,c),R.call(this,b)},R=function(a){var b=(this.sandbox.dom.data(a,"id"),this.sandbox.dom.find("."+h.fieldSelectClass,a)),c=this.sandbox.dom.find("."+h.operatorSelectClass,a),d=this.sandbox.dom.find("."+h.valueInputClass,a);this.options.validationSelector&&(this.sandbox.form.removeField(this.options.validationSelector,b),this.sandbox.form.removeField(this.options.validationSelector,c),this.sandbox.form.removeField(this.options.validationSelector,d)),this.sandbox.dom.remove(a),U.call(this)},S=function(a){var b,c,d,e,f,g,i,j={conditions:[]},k=this.sandbox.dom.data(a,"id");return k&&"new"!==k&&(j.id=k),b=this.sandbox.dom.val(this.sandbox.dom.find("."+h.fieldSelectClass,a)),d=this.sandbox.dom.data(this.sandbox.dom.find("."+h.operatorSelectClass,a),"type"),c=this.sandbox.dom.val(this.sandbox.dom.find("."+h.operatorSelectClass,a)),f=this.sandbox.dom.data(this.sandbox.dom.find("."+h.valueInputClass,a),"id"),i=x.call(this,c),e=i&&"datepicker"===i.inputType?this.sandbox.dom.val(this.sandbox.dom.find("."+h.valueInputClass+" input",a)):this.sandbox.dom.val(this.sandbox.dom.find("."+h.valueInputClass,a)),g={type:d,field:b,operator:i?i.operator:null,value:e},f&&(g.id=f),j.conditions.push(g),j},T=function(){var a=[],b=this.sandbox.dom.find("."+h.conditionRowClass,this.$container);return this.sandbox.dom.each(b,function(b,c){a.push(S.call(this,c))}.bind(this)),a},U=function(){this.data=T.call(this),this.sandbox.dom.data(this.options.el,"conditionSelection",this.data),this.sandbox.emit(k.call(this))},V=function(a){var b={};return a.forEach(function(a){b[a.name]=a}.bind(this)),b};return{initialize:function(){this.options=this.sandbox.util.extend(!0,{},f,this.options),this.options.ids={loader:"condition-selection-"+this.options.instanceName+"-loader",container:"condition-selection-"+this.options.instanceName+"-container",addButton:"condition-selection-"+this.options.instanceName+"-add-button"},m.call(this),this.fetchOperatorsAndFields()},fetchOperatorsAndFields:function(){var a,b;this.options.operatorsUrl&&"string"==typeof this.options.operatorsUrl&&this.options.fieldsUrl&&"string"==typeof this.options.fieldsUrl?(a=this.sandbox.util.load(this.options.operatorsUrl),b=this.sandbox.util.load(this.options.fieldsUrl),this.sandbox.data.when(a,b).done(function(a,b){this.operators=a[0]._embedded.items,this.fields=V.call(this,b[0]),this.render()}.bind(this))):this.sandbox.logger.error("Url for fields and/or operators not specified or invalid!")},render:function(){this.usedFields={},this.deferreds=[],this.$container=this.sandbox.dom.createElement(g.container(h.conditionContainerClass,this.options.ids.container)),this.sandbox.dom.append(this.options.el,this.$container),this.options.data&&o.call(this),G.call(this),n.call(this),this.sandbox.dom.show(this.$container),this.deferreds?this.sandbox.data.when.apply(this,this.deferreds).then(function(){H.call(this)}.bind(this)):H.call(this),this.sandbox.emit(i.call(this))}}});