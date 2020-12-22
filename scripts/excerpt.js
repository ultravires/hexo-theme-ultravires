/** 
 * Custom helper
 * 
 * A helper makes it easy to quickly add snippets to your templates.
 * We recommend using helpers instead of templates when you’re dealing with more complicated code.
 */

// 优化文章简介 去除标题样式
hexo.extend.helper.register('excerpt', function(excerpt) {
	excerpt = excerpt.replace(/<[^>]+>/img, ' ').slice(0, 200) + '...';
	return excerpt;
});
