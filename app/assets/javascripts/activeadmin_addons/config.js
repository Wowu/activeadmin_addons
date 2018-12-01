var initializer = function() {
  ActiveadminAddons = {
    config: {
      defaultSelect: $('body').data('default-select'),
      select2Locale: $('body').data('select2-locale'),
    },
  };
};

$(initializer);
$(document).on('turbolinks:load', initializer);
