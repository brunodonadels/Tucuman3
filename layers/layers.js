var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_ViviendasenreasruralesINDEC_3 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_3 = format_ViviendasenreasruralesINDEC_3.readFeatures(json_ViviendasenreasruralesINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_3.addFeatures(features_ViviendasenreasruralesINDEC_3);
var lyr_ViviendasenreasruralesINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_3, 
                style: style_ViviendasenreasruralesINDEC_3,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_0.png" /> 0 - 810<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_1.png" /> 811 - 4.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_2.png" /> 4.001 - 6.650<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_3.png" /> 6.651 - 9.250<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_4.png" /> 9.251 - 10.650<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 8.100 - 22.000<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 22.001 - 50.620<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 50.621 - 113.785<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 113.786 o más<br />'
        });
var format_PoblacinpordepartamentoINDEC_5 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_5 = format_PoblacinpordepartamentoINDEC_5.readFeatures(json_PoblacinpordepartamentoINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_5.addFeatures(features_PoblacinpordepartamentoINDEC_5);
var lyr_PoblacinpordepartamentoINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_5, 
                style: style_PoblacinpordepartamentoINDEC_5,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_0.png" /> 13.550 - 36.950<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_1.png" /> 36.951 - 80.725<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_2.png" /> 80.726 - 180.500<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_5_3.png" /> 180.501 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 70 - 900<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 901 - 2.485<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 2.486 - 4.365<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 4.366 - 7.450<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 1 - 300<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 301 - 1.700<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 1.701 - 4.200<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_4.png" /> 4.201 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 1 - 225<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 226 - 1.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 1.001 - 4.900<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_4.png" /> 4.901 o más<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 1 - 800<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 801 - 4.450<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 4.451 - 25.650<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_4.png" /> 25.651 - 45.100<br />'
        });
var format_HectreassembradasdehortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreassembradasdehortalizasINDEC_10 = format_HectreassembradasdehortalizasINDEC_10.readFeatures(json_HectreassembradasdehortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdehortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdehortalizasINDEC_10.addFeatures(features_HectreassembradasdehortalizasINDEC_10);
var lyr_HectreassembradasdehortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdehortalizasINDEC_10, 
                style: style_HectreassembradasdehortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas sembradas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreassembradasdehortalizasINDEC_10_0.png" /> 10 - 80<br />\
    <img src="styles/legend/HectreassembradasdehortalizasINDEC_10_1.png" /> 10 - 225<br />\
    <img src="styles/legend/HectreassembradasdehortalizasINDEC_10_2.png" /> 226 - 575<br />\
    <img src="styles/legend/HectreassembradasdehortalizasINDEC_10_3.png" /> 576 - 1.260<br />'
        });
var format_HectreassembradasdetabacoINDEC_11 = new ol.format.GeoJSON();
var features_HectreassembradasdetabacoINDEC_11 = format_HectreassembradasdetabacoINDEC_11.readFeatures(json_HectreassembradasdetabacoINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdetabacoINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdetabacoINDEC_11.addFeatures(features_HectreassembradasdetabacoINDEC_11);
var lyr_HectreassembradasdetabacoINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdetabacoINDEC_11, 
                style: style_HectreassembradasdetabacoINDEC_11,
                interactive: true,
    title: 'Hectáreas sembradas de tabaco (INDEC)<br />\
    <img src="styles/legend/HectreassembradasdetabacoINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdetabacoINDEC_11_1.png" /> 1 - 50<br />\
    <img src="styles/legend/HectreassembradasdetabacoINDEC_11_2.png" /> 51 - 650<br />\
    <img src="styles/legend/HectreassembradasdetabacoINDEC_11_3.png" /> 651 o más<br />'
        });
var format_HectreassembradasdecaadeazcarINDEC_12 = new ol.format.GeoJSON();
var features_HectreassembradasdecaadeazcarINDEC_12 = format_HectreassembradasdecaadeazcarINDEC_12.readFeatures(json_HectreassembradasdecaadeazcarINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdecaadeazcarINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdecaadeazcarINDEC_12.addFeatures(features_HectreassembradasdecaadeazcarINDEC_12);
var lyr_HectreassembradasdecaadeazcarINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdecaadeazcarINDEC_12, 
                style: style_HectreassembradasdecaadeazcarINDEC_12,
                interactive: true,
    title: 'Hectáreas sembradas de caña de azúcar (INDEC)<br />\
    <img src="styles/legend/HectreassembradasdecaadeazcarINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdecaadeazcarINDEC_12_1.png" /> 50 - 4.000<br />\
    <img src="styles/legend/HectreassembradasdecaadeazcarINDEC_12_2.png" /> 4.001 - 13.000<br />\
    <img src="styles/legend/HectreassembradasdecaadeazcarINDEC_12_3.png" /> 13.001 - 30.900<br />\
    <img src="styles/legend/HectreassembradasdecaadeazcarINDEC_12_4.png" /> 30.901 - 48.000<br />'
        });
var format_HectreassembradasdelimonerosINDEC_13 = new ol.format.GeoJSON();
var features_HectreassembradasdelimonerosINDEC_13 = format_HectreassembradasdelimonerosINDEC_13.readFeatures(json_HectreassembradasdelimonerosINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdelimonerosINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdelimonerosINDEC_13.addFeatures(features_HectreassembradasdelimonerosINDEC_13);
var lyr_HectreassembradasdelimonerosINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdelimonerosINDEC_13, 
                style: style_HectreassembradasdelimonerosINDEC_13,
                interactive: true,
    title: 'Hectáreas sembradas de limoneros (INDEC)<br />\
    <img src="styles/legend/HectreassembradasdelimonerosINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdelimonerosINDEC_13_1.png" /> 85 - 600<br />\
    <img src="styles/legend/HectreassembradasdelimonerosINDEC_13_2.png" /> 601 - 2.035<br />\
    <img src="styles/legend/HectreassembradasdelimonerosINDEC_13_3.png" /> 2.036 - 5.650<br />\
    <img src="styles/legend/HectreassembradasdelimonerosINDEC_13_4.png" /> 5.651 - 8.900<br />'
        });
var format_HectreassembradasdemazMAGyP_14 = new ol.format.GeoJSON();
var features_HectreassembradasdemazMAGyP_14 = format_HectreassembradasdemazMAGyP_14.readFeatures(json_HectreassembradasdemazMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdemazMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdemazMAGyP_14.addFeatures(features_HectreassembradasdemazMAGyP_14);
var lyr_HectreassembradasdemazMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdemazMAGyP_14, 
                style: style_HectreassembradasdemazMAGyP_14,
                interactive: true,
    title: 'Hectáreas sembradas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_14_1.png" /> 1 - 500<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_14_2.png" /> 501 - 6.000<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_14_3.png" /> 6.001 - 17.500<br />\
    <img src="styles/legend/HectreassembradasdemazMAGyP_14_4.png" /> 17.501 o más<br />'
        });
var format_HectreassembradasdetrigoMAGyP_15 = new ol.format.GeoJSON();
var features_HectreassembradasdetrigoMAGyP_15 = format_HectreassembradasdetrigoMAGyP_15.readFeatures(json_HectreassembradasdetrigoMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdetrigoMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdetrigoMAGyP_15.addFeatures(features_HectreassembradasdetrigoMAGyP_15);
var lyr_HectreassembradasdetrigoMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdetrigoMAGyP_15, 
                style: style_HectreassembradasdetrigoMAGyP_15,
                interactive: true,
    title: 'Hectáreas sembradas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdetrigoMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdetrigoMAGyP_15_1.png" /> 1 - 400<br />\
    <img src="styles/legend/HectreassembradasdetrigoMAGyP_15_2.png" /> 401 - 10.000<br />\
    <img src="styles/legend/HectreassembradasdetrigoMAGyP_15_3.png" /> 10.001 - 15.000<br />\
    <img src="styles/legend/HectreassembradasdetrigoMAGyP_15_4.png" /> 15.001 o más<br />'
        });
var format_HectreassembradasdesojaMAGyP_16 = new ol.format.GeoJSON();
var features_HectreassembradasdesojaMAGyP_16 = format_HectreassembradasdesojaMAGyP_16.readFeatures(json_HectreassembradasdesojaMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassembradasdesojaMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassembradasdesojaMAGyP_16.addFeatures(features_HectreassembradasdesojaMAGyP_16);
var lyr_HectreassembradasdesojaMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassembradasdesojaMAGyP_16, 
                style: style_HectreassembradasdesojaMAGyP_16,
                interactive: true,
    title: 'Hectáreas sembradas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_16_0.png" /> 0<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_16_1.png" /> 200 - 3.200<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_16_2.png" /> 3.201 - 24.200<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_16_3.png" /> 24.201 - 30.600<br />\
    <img src="styles/legend/HectreassembradasdesojaMAGyP_16_4.png" /> 30.601 o más<br />'
        });
var format_Capacitaciones2019tcnicas_17 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_17 = format_Capacitaciones2019tcnicas_17.readFeatures(json_Capacitaciones2019tcnicas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_17.addFeatures(features_Capacitaciones2019tcnicas_17);
var lyr_Capacitaciones2019tcnicas_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_17, 
                style: style_Capacitaciones2019tcnicas_17,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_17.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Localidades_18 = new ol.format.GeoJSON();
var features_Localidades_18 = format_Localidades_18.readFeatures(json_Localidades_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_18.addFeatures(features_Localidades_18);
var lyr_Localidades_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_18, 
                style: style_Localidades_18,
                interactive: true,
                title: '<img src="styles/legend/Localidades_18.png" /> Localidades'
            });
var format_BER_19 = new ol.format.GeoJSON();
var features_BER_19 = format_BER_19.readFeatures(json_BER_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_19.addFeatures(features_BER_19);
var lyr_BER_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_19, 
                style: style_BER_19,
                interactive: true,
                title: '<img src="styles/legend/BER_19.png" /> BER'
            });
var format_BER_20 = new ol.format.GeoJSON();
var features_BER_20 = format_BER_20.readFeatures(json_BER_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_20.addFeatures(features_BER_20);
var lyr_BER_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_20, 
                style: style_BER_20,
                interactive: true,
                title: '<img src="styles/legend/BER_20.png" /> BER'
            });
var format_Delegacin_21 = new ol.format.GeoJSON();
var features_Delegacin_21 = format_Delegacin_21.readFeatures(json_Delegacin_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_21.addFeatures(features_Delegacin_21);
var lyr_Delegacin_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_21, 
                style: style_Delegacin_21,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_21.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_ViviendasenreasruralesINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_PoblacinpordepartamentoINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreassembradasdehortalizasINDEC_10.setVisible(true);lyr_HectreassembradasdetabacoINDEC_11.setVisible(true);lyr_HectreassembradasdecaadeazcarINDEC_12.setVisible(true);lyr_HectreassembradasdelimonerosINDEC_13.setVisible(true);lyr_HectreassembradasdemazMAGyP_14.setVisible(true);lyr_HectreassembradasdetrigoMAGyP_15.setVisible(true);lyr_HectreassembradasdesojaMAGyP_16.setVisible(true);lyr_Capacitaciones2019tcnicas_17.setVisible(true);lyr_Localidades_18.setVisible(true);lyr_BER_19.setVisible(true);lyr_BER_20.setVisible(true);lyr_Delegacin_21.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_ViviendasenreasruralesINDEC_3,lyr_PEAINDEC_4,lyr_PoblacinpordepartamentoINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreassembradasdehortalizasINDEC_10,lyr_HectreassembradasdetabacoINDEC_11,lyr_HectreassembradasdecaadeazcarINDEC_12,lyr_HectreassembradasdelimonerosINDEC_13,lyr_HectreassembradasdemazMAGyP_14,lyr_HectreassembradasdetrigoMAGyP_15,lyr_HectreassembradasdesojaMAGyP_16,lyr_Capacitaciones2019tcnicas_17,lyr_Localidades_18,lyr_BER_19,lyr_BER_20,lyr_Delegacin_21];
lyr_Departamentos_2.set('fieldAliases', {'depto': 'depto', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldAliases', {'viv. rur': 'viv. rur', });
lyr_PEAINDEC_4.set('fieldAliases', {'pea': 'pea', });
lyr_PoblacinpordepartamentoINDEC_5.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreassembradasdehortalizasINDEC_10.set('fieldAliases', {'hortaliza': 'hortaliza', });
lyr_HectreassembradasdetabacoINDEC_11.set('fieldAliases', {'tabaco': 'tabaco', });
lyr_HectreassembradasdecaadeazcarINDEC_12.set('fieldAliases', {'azucar': 'azucar', });
lyr_HectreassembradasdelimonerosINDEC_13.set('fieldAliases', {'limonero': 'limonero', });
lyr_HectreassembradasdemazMAGyP_14.set('fieldAliases', {'maiz': 'maiz', });
lyr_HectreassembradasdetrigoMAGyP_15.set('fieldAliases', {'trigo': 'trigo', });
lyr_HectreassembradasdesojaMAGyP_16.set('fieldAliases', {'soja': 'soja', });
lyr_Capacitaciones2019tcnicas_17.set('fieldAliases', {'localidad': 'localidad', 'tipo capa.': 'tipo capa.', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Localidades_18.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BER_19.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_BER_20.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_Delegacin_21.set('fieldAliases', {'localidad': 'localidad', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', 'direccion': 'direccion', 'CAD 2020': 'CAD 2020', });
lyr_Departamentos_2.set('fieldImages', {'depto': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldImages', {'viv. rur': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'pea': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_5.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreassembradasdehortalizasINDEC_10.set('fieldImages', {'hortaliza': 'TextEdit', });
lyr_HectreassembradasdetabacoINDEC_11.set('fieldImages', {'tabaco': 'TextEdit', });
lyr_HectreassembradasdecaadeazcarINDEC_12.set('fieldImages', {'azucar': 'TextEdit', });
lyr_HectreassembradasdelimonerosINDEC_13.set('fieldImages', {'limonero': 'TextEdit', });
lyr_HectreassembradasdemazMAGyP_14.set('fieldImages', {'maiz': 'TextEdit', });
lyr_HectreassembradasdetrigoMAGyP_15.set('fieldImages', {'trigo': 'TextEdit', });
lyr_HectreassembradasdesojaMAGyP_16.set('fieldImages', {'soja': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_17.set('fieldImages', {'localidad': 'TextEdit', 'tipo capa.': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_Localidades_18.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BER_19.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_BER_20.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_Delegacin_21.set('fieldImages', {'localidad': 'TextEdit', 'prest 2016': 'Range', 'prest 2017': 'Range', 'prest 2018': 'Range', 'prest 2019': 'Range', 'prest 2020': 'Range', 'direccion': 'TextEdit', 'CAD 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'depto': 'inline label', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldLabels', {'viv. rur': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'pea': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_5.set('fieldLabels', {'poblacion': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreassembradasdehortalizasINDEC_10.set('fieldLabels', {'hortaliza': 'inline label', });
lyr_HectreassembradasdetabacoINDEC_11.set('fieldLabels', {'tabaco': 'inline label', });
lyr_HectreassembradasdecaadeazcarINDEC_12.set('fieldLabels', {'azucar': 'inline label', });
lyr_HectreassembradasdelimonerosINDEC_13.set('fieldLabels', {'limonero': 'inline label', });
lyr_HectreassembradasdemazMAGyP_14.set('fieldLabels', {'maiz': 'inline label', });
lyr_HectreassembradasdetrigoMAGyP_15.set('fieldLabels', {'trigo': 'inline label', });
lyr_HectreassembradasdesojaMAGyP_16.set('fieldLabels', {'soja': 'inline label', });
lyr_Capacitaciones2019tcnicas_17.set('fieldLabels', {'localidad': 'inline label', 'tipo capa.': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Localidades_18.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BER_19.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_BER_20.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_Delegacin_21.set('fieldLabels', {'localidad': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', 'direccion': 'inline label', 'CAD 2020': 'inline label', });
lyr_Delegacin_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});