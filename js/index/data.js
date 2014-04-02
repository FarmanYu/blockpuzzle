(function (exports) {
    var _data = [
      [],
      [
        [00,10,01,11,21,20,30,31,41,40,50,51],
        [00,10,01,11,21,20,30,31,41,40,50,51],
        [00,01,10,11,20,21,31,30,40,41,51,50]
      ],
      [
        [30,31,21,11,01],
        [40,30,20,11,01],
        [51,41,31,21,12,11,02,00,01],
        [12,11,10,01],
        [22,12,11,10,20,02],
        [12,11,21,20,01,00,10]
      ],
      [
        [31,42,41,32,22,20,21,11,12,01,02],
        [20,10,00,01,02],
        [12,02,11,01,10],
        [11,20,10,00],
        [20,21,11,10,01,00],
        [20,10,00,01,02]
      ],
      [
        [01,02,12,11,13,10],
        [30,40,20,10,00],
        [31,21,11,01,00],
        [13,12,02,01,00,10,11,21],
        [00,10,11,12,02,13,03,21],
        [00,10,11,02]
      ],
      [
        [22,21,11,10,00],
        [00,10,20,21,31,32],
        [00,10,11,12,22,21,20],
        [20,10,00,01,11,21,22],
        [32,22,12,11,00,01],
        [00,01,02,03,13]
      ],
      [
        [00,01,11,12,02,22,32],
        [00,11,10,20,21,31],
        [00,10,11,02,12,13,14,15],
        [20,21,22,12,02],
        [30,31,21,20,10,00,01,02,12,11]
      ]
    ];
	var Data = {
		getStep : function(step){
            if(_data[step] && _data[step].length){
                return _data[step];
            }
            return [];
        },
        getMaxStep : function(){
            return (_data.length - 1);
        }
	};

	exports.Data = Data;
})(this);
