/*
  Local realistic dark vector basemap for Leaflet projects.
  Dependencies:
    - Leaflet already loaded
    - assets/world-vectors.js loaded before this file
  Usage after map creation:
    addLocalDarkVectorBasemap(map);
  This uses local vector data only: no tile server, no MapTiler, no Mapbox, no API key.
*/
(function () {
  'use strict';

  function addGrid(group, options) {
    const gridColor = options.gridColor || 'rgba(148,163,184,.11)';
    const minorColor = options.minorGridColor || 'rgba(148,163,184,.075)';

    for (let lat = -60; lat <= 75; lat += 15) {
      L.polyline([[lat, -180], [lat, 180]], {
        color: lat === 0 ? gridColor : minorColor,
        weight: lat === 0 ? 1.1 : 0.8,
        opacity: 1,
        interactive: false,
        bubblingMouseEvents: false
      }).addTo(group);
    }

    for (let lng = -180; lng <= 180; lng += 30) {
      L.polyline([[-65, lng], [80, lng]], {
        color: lng === 0 ? gridColor : minorColor,
        weight: lng === 0 ? 1.1 : 0.8,
        opacity: 1,
        interactive: false,
        bubblingMouseEvents: false
      }).addTo(group);
    }
  }

  window.addLocalDarkVectorBasemap = function addLocalDarkVectorBasemap(map, options) {
    options = options || {};

    if (!window.WORLD_VECTORS) {
      console.error('WORLD_VECTORS missing. Load assets/world-vectors.js before assets/vector-basemap.js');
      return L.layerGroup().addTo(map);
    }

    const vectors = window.WORLD_VECTORS;
    const group = L.layerGroup().addTo(map);

    addGrid(group, options);

    const landGlowStyle = {
      color: options.landGlowColor || 'rgba(56,189,248,.20)',
      weight: options.landGlowWeight || 2.8,
      fillColor: options.landGlowFill || 'rgba(30,64,99,.16)',
      fillOpacity: options.landGlowFillOpacity == null ? 0.35 : options.landGlowFillOpacity,
      opacity: options.landGlowOpacity == null ? 0.65 : options.landGlowOpacity,
      interactive: false,
      bubblingMouseEvents: false
    };

    const landStyle = {
      color: options.landColor || 'rgba(203,213,225,.24)',
      weight: options.landWeight || 0.7,
      fillColor: options.landFill || 'rgba(15, 36, 61, .72)',
      fillOpacity: options.landOpacity == null ? 0.92 : options.landOpacity,
      interactive: false,
      bubblingMouseEvents: false
    };

    const coastStyle = {
      color: options.coastColor || 'rgba(186,230,253,.34)',
      weight: options.coastWeight || 0.7,
      opacity: options.coastOpacity == null ? 0.86 : options.coastOpacity,
      interactive: false,
      bubblingMouseEvents: false
    };

    const countryStyle = {
      color: options.countryColor || 'rgba(148,163,184,.18)',
      weight: options.countryWeight || 0.45,
      opacity: options.countryOpacity == null ? 0.8 : options.countryOpacity,
      interactive: false,
      bubblingMouseEvents: false
    };

    // Draw glow first, then land, then coastlines/borders.
    (vectors.land || []).forEach(function (shape) {
      L.polygon(shape, landGlowStyle).addTo(group);
      L.polygon(shape, landStyle).addTo(group);
    });

    (vectors.coast || []).forEach(function (line) {
      L.polyline(line, coastStyle).addTo(group);
    });

    (vectors.countries || []).forEach(function (line) {
      L.polyline(line, countryStyle).addTo(group);
    });

    // Keep the vector basemap visually behind routes and markers.
    if (group.getLayers) {
      group.getLayers().forEach(function (layer) {
        if (layer.bringToBack) layer.bringToBack();
      });
    }

    return group;
  };
})();
