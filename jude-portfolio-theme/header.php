<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/images/Logo.png">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <!-- Header Navigation -->
    <header class="header">
        <div class="header-container">
            <div class="logo">Jude</div>
            <nav class="nav-menu">
                <a href="#section1" class="nav-link">Home</a>
                <a href="#section2" class="nav-link">About</a>
                <a href="#education" class="nav-link">Education</a>
                <a href="#section3" class="nav-link">Services</a>
                <a href="#section4" class="nav-link">Skills</a>
                <a href="#" class="nav-link" id="contactNavLink">Contact</a>
            </nav>
        </div>
    </header>
