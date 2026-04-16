<?php
/**
 * Jude Portfolio Theme - Functions File
 * 
 * Enqueues scripts, styles, and sets up theme functionality.
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue scripts and styles
 */
function jude_portfolio_enqueue_assets() {
    // Theme stylesheet
    wp_enqueue_style(
        'jude-portfolio-style',
        get_stylesheet_uri(),
        array(),
        '1.0.0'
    );
    
    // Main JavaScript file
    wp_enqueue_script(
        'jude-portfolio-script',
        get_template_directory_uri() . '/assets/js/portfolio.js',
        array(),
        '1.0.0',
        true // Load in footer
    );
}
add_action('wp_enqueue_scripts', 'jude_portfolio_enqueue_assets');

/**
 * Add theme support
 */
function jude_portfolio_setup() {
    // Add title tag support
    add_theme_support('title-tag');
    
    // Add post thumbnail support (for future blog functionality)
    add_theme_support('post-thumbnails');
    
    // HTML5 support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'jude_portfolio_setup');

/**
 * Disable admin bar for clean portfolio view
 * Remove this if you want to show admin bar
 */
function jude_portfolio_disable_admin_bar() {
    if (!is_admin()) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'jude_portfolio_disable_admin_bar');

/**
 * Custom excerpt length (if adding blog later)
 */
function jude_portfolio_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'jude_portfolio_excerpt_length');

/**
 * Custom excerpt more
 */
function jude_portfolio_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'jude_portfolio_excerpt_more');
