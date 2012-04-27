exports.breadcrumbs = function(options) {
  var content = site.currentContent;
  content.last = true;
  var breadcrumb = [content];
  while (content = content.parent) {
    breadcrumb.unshift(content);
  }
  if (options.exclude_home) {
    breadcrumb.shift();
  }
  return breadcrumb;
};