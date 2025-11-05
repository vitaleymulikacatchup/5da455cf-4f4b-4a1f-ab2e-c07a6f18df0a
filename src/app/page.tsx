"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, Cherry, ChefHat, Clock, MessageSquare, Users, Utensils } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="none"
      cardStyle="glass-depth"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "feature" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sakura Dining"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Authentic Japanese Cuisine"
          description="Experience the finest traditional Japanese flavors crafted by our master chefs using authentic ingredients and time-honored techniques"
          tag="Welcome"
          tagIcon={Cherry}
          mediaItems={[
            {
              imageSrc: "https://images.pexels.com/photos/8951556/pexels-photo-8951556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh sushi selection"
            },
            {
              imageSrc: "https://images.pexels.com/photos/6646349/pexels-photo-6646349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional ramen bowl"
            },
            {
              imageSrc: "https://images.pexels.com/photos/28291549/pexels-photo-28291549.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Crispy tempura platter"
            },
            {
              imageSrc: "https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh sashimi selection"
            }
          ]}
          buttons={[
            { text: "View Menu", href: "feature" },
            { text: "Make Reservation", href: "contact" }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutMetric
          title="At Sakura Dining, we honor the ancient traditions of Japanese cuisine while creating unforgettable dining experiences for every guest"
          metrics={[
            {
              icon: Clock,
              label: "Years of Excellence",
              value: "25+"
            },
            {
              icon: Users,
              label: "Happy Customers",
              value: "10K+"
            },
            {
              icon: Award,
              label: "Culinary Awards",
              value: "15"
            },
            {
              icon: Utensils,
              label: "Signature Dishes",
              value: "50+"
            }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Specialties"
          description="Discover our signature dishes prepared with the finest ingredients and traditional Japanese cooking methods"
          tag="Menu"
          tagIcon={ChefHat}
          features={[
            {
              title: "Fresh Sushi & Sashimi",
              description: "Daily selection of the finest fish, expertly prepared by our sushi masters",
              imageSrc: "https://images.pexels.com/photos/8951556/pexels-photo-8951556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh sushi selection"
            },
            {
              title: "Traditional Ramen",
              description: "Rich, flavorful broths simmered for hours with handmade noodles",
              imageSrc: "https://images.pexels.com/photos/6646349/pexels-photo-6646349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional ramen bowl"
            },
            {
              title: "Crispy Tempura",
              description: "Light, crispy batter coating fresh vegetables and premium seafood",
              imageSrc: "https://images.pexels.com/photos/28291549/pexels-photo-28291549.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Crispy tempura platter"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read authentic reviews from our valued customers"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Food Critic",
              company: "Tokyo Times",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8951431/pexels-photo-8951431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen portrait"
            },
            {
              id: "2",
              name: "Michael Tanaka",
              role: "Regular Customer",
              company: "Local Foodie",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7490483/pexels-photo-7490483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Tanaka portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Chef",
              company: "Culinary Institute",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/31367596/pexels-photo-31367596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Executive",
              company: "Tokyo Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1121482/pexels-photo-1121482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          title="Make a Reservation"
          description="Join us for an authentic Japanese dining experience. Reserve your table today or sign up for our newsletter to receive updates on special events and seasonal menu offerings."
          imageSrc="https://images.pexels.com/photos/8112977/pexels-photo-8112977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Traditional Japanese restaurant interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Reserve Table"
          termsText="By reserving, you agree to our dining policies and reservation terms."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Sakura Dining"
          copyrightText="© 2025 Sakura Dining | Authentic Japanese Restaurant"
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Sushi & Sashimi", href: "feature" },
                { label: "Ramen", href: "feature" },
                { label: "Tempura", href: "feature" },
                { label: "Sake Collection", href: "feature" }
              ]
            },
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Chefs", href: "about" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Private Events", href: "contact" },
                { label: "Catering", href: "contact" },
                { label: "Gift Cards", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}