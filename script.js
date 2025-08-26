// Community Leaders Application
class CommunityLeaders {
    constructor() {
        this.profiles = [];
        this.filteredProfiles = [];
        this.init();
    }

    init() {
        // Set default alignment to alignment-2 before loading profiles
        this.switchAlignment('alignment-2');
        // Set default state arrangement to by-line
        this.switchStateArrangement('by-line');
        this.loadProfiles();
        this.setupEventListeners();
    }

    loadProfiles() {
        // Sample Community Leader profile data
        this.profiles = [
            {
                id: 1,
                name: "Sarah Johnson",
                handle: "sjohnson24",
                badge: "Expert Elite",
                job_title: "Expert Elite Member",
                company: "TechCorp Solutions",
                region: "north-america",
                expertise: "development",
                year: "2024",
                location: "San Francisco, CA",
                bio: "Passionate about creating innovative solutions that drive business transformation. Specializes in Lightning Web Components and integration patterns.",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                posts: 156,
                joinDate: "03-15-2019",
                email: "sarah.johnson@techcorp.com",
                signins: 2341,
                pageViews: 5892,
                subscriptions: ["SYS-ADSK-Gold Subscription", "Expert Elite", "Lightning Champions"],
                ipAddress: "192.168.1.45",
                lastActive: "12-20-2024"
            },
            {
                id: 2,
                name: "Marcus Rodriguez",
                handle: "mrodriguez",
                badge: "Expert Elite",
                job_title: "Solution Architect",
                company: "Global Enterprises",
                region: "latin-america",
                expertise: "architecture",
                year: "2023",
                location: "Mexico City, Mexico",
                bio: "Expert in designing scalable Autodesk platform solutions for enterprise clients. Focus on data architecture and system integration.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                posts: 89,
                joinDate: "07-22-2020",
                email: "m.rodriguez@globalent.mx",
                signins: 1567,
                pageViews: 3421,
                subscriptions: ["SYS-ADSK-Silver Subscription", "Architecture Forum"],
                ipAddress: "201.142.89.33",
                lastActive: "01-02-2025"
            },
            {
                id: 3,
                name: "Priya Patel",
                handle: "ppatel_admin",
                badge: "Community Expert",
                job_title: "Forum Moderator",
                company: "InnovateTech",
                region: "asia-pacific",
                expertise: "administration",
                year: "2024",
                location: "Mumbai, India",
                bio: "Dedicated to optimizing business processes through intelligent automation and user experience design.",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
                posts: 234,
                joinDate: "11-08-2018",
                email: "priya.p@innovatetech.in",
                signins: 3892,
                pageViews: 7234,
                subscriptions: ["SYS-ADSK-Platinum Subscription", "Admin Support", "Allow Simple HTML"],
                ipAddress: "103.21.45.178",
                lastActive: "01-05-2025"
            },
            {
                id: 4,
                name: "James Wilson",
                handle: "jwilson_uk",
                badge: "Expert Elite",
                job_title: "Expert Elite Member",
                company: "CloudForward",
                region: "europe",
                expertise: "consulting",
                year: "2023",
                location: "London, UK",
                bio: "Helping organizations maximize their Autodesk platform investment through strategic implementations and change management.",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                posts: 412,
                joinDate: "02-14-2017",
                email: "james.wilson@cloudforward.co.uk",
                signins: 5123,
                pageViews: 9876,
                subscriptions: ["Expert Elite", "SYS-ADSK-Premium Non Admin Support"],
                ipAddress: "82.163.45.129",
                lastActive: "01-04-2025"
            },
            {
                id: 5,
                name: "Emily Chen",
                handle: "echen_dev",
                badge: "Community Expert",
                job_title: "Developer Expert",
                company: "NextGen Solutions",
                region: "asia-pacific",
                expertise: "development",
                year: "2024",
                location: "Singapore",
                bio: "Specializes in custom Autodesk applications and advanced platform development for complex business requirements.",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
                posts: 178,
                joinDate: "05-30-2019",
                email: "emily.chen@nextgen.sg",
                signins: 2678,
                pageViews: 4532,
                subscriptions: ["SYS-ADSK-Gold Subscription", "Developer Network"],
                ipAddress: "203.127.89.45",
                lastActive: "01-03-2025"
            },
            {
                id: 6,
                name: "David Thompson",
                handle: "dthompson_ca",
                badge: "Community Leader",
                job_title: "Technical Expert",
                company: "Enterprise Systems",
                region: "north-america",
                expertise: "architecture",
                year: "2022",
                location: "Toronto, Canada",
                bio: "Leading digital transformation initiatives with focus on API integrations and data migration strategies.",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
                posts: 267,
                joinDate: "09-12-2016",
                email: "david.t@enterprise.ca",
                signins: 4321,
                pageViews: 8765,
                subscriptions: ["SYS-ADSK-Premium Admin Support", "Autodesk Group Network Group Leaders"],
                ipAddress: "67.163.206.129",
                lastActive: "06-21-2025"
            },
            {
                id: 7,
                name: "Ana Silva",
                handle: "asilva_br",
                badge: "Community Expert",
                job_title: "Solutions Consultant",
                company: "Digital Transformation Co",
                region: "latin-america",
                expertise: "consulting",
                year: "2024",
                location: "São Paulo, Brazil",
                bio: "Bridging the gap between business requirements and technical solutions with expertise in process optimization.",
                avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face",
                posts: 145,
                joinDate: "01-18-2020",
                email: "ana.silva@digitaltransform.br",
                signins: 1890,
                pageViews: 3567,
                subscriptions: ["SYS-ADSK-Silver Subscription", "Business Analysis Forum"],
                ipAddress: "177.45.89.234",
                lastActive: "01-05-2025"
            },
            {
                id: 8,
                name: "Michael O'Connor",
                handle: "moconnor_ie",
                badge: "Expert Elite",
                job_title: "Support Specialist",
                company: "TechAdvantage",
                region: "europe",
                expertise: "administration",
                year: "2023",
                location: "Dublin, Ireland",
                bio: "Expert in user management, security configurations, and workflow automation to enhance organizational efficiency.",
                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
                posts: 87,
                joinDate: "09-10-2007",
                email: "michael.oconnor@techadvantage.ie",
                signins: 1022,
                pageViews: 2793,
                subscriptions: ["SYS-ADSK-Gold Subscription", "SYS-ADSK-Silver Subscription", "Allow Simple HTML"],
                ipAddress: "86.42.178.95",
                lastActive: "01-02-2025"
            }
        ];

        this.filteredProfiles = [...this.profiles];
        this.renderProfiles();
        this.updateResultsCount();
    }

    setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        const regionFilter = document.getElementById('regionFilter');
        const expertiseFilter = document.getElementById('expertiseFilter');
        const yearFilter = document.getElementById('yearFilter');
        const alignmentToggle = document.getElementById('alignmentToggle');
        const stateArrangementInputs = document.querySelectorAll('input[name="stateArrangement"]');

        searchInput.addEventListener('input', () => this.applyFilters());
        regionFilter.addEventListener('change', () => this.applyFilters());
        expertiseFilter.addEventListener('change', () => this.applyFilters());
        yearFilter.addEventListener('change', () => this.applyFilters());
        
        // Handle alignment toggle
        alignmentToggle.addEventListener('change', (e) => {
            this.switchAlignment(e.target.value);
        });

        // Handle state arrangement toggle
        stateArrangementInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.switchStateArrangement(e.target.value);
            });
        });

        // Simulate loading delay
        setTimeout(() => {
            document.querySelector('.loading').style.display = 'none';
        }, 1000);
    }

    applyFilters() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const regionFilter = document.getElementById('regionFilter').value;
        const expertiseFilter = document.getElementById('expertiseFilter').value;
        const yearFilter = document.getElementById('yearFilter').value;

        this.filteredProfiles = this.profiles.filter(profile => {
            const matchesSearch = !searchTerm || 
                profile.name.toLowerCase().includes(searchTerm) ||
                profile.job_title.toLowerCase().includes(searchTerm) ||
                profile.company.toLowerCase().includes(searchTerm) ||
                profile.bio.toLowerCase().includes(searchTerm);

            const matchesRegion = !regionFilter || profile.region === regionFilter;
            const matchesExpertise = !expertiseFilter || profile.expertise === expertiseFilter;
            const matchesYear = !yearFilter || profile.year === yearFilter;

            return matchesSearch && matchesRegion && matchesExpertise && matchesYear;
        });

        this.renderProfiles();
        this.updateResultsCount();
    }

    renderProfiles() {
        const grid = document.getElementById('profileGrid');
        
        if (this.filteredProfiles.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <h3>No profiles found</h3>
                    <p>Try adjusting your search criteria or filters.</p>
                </div>
            `;
            return;
        }

        const currentAlignment = document.body.classList.contains('alignment-2') ? 'alignment-2' : 'alignment-1';
        
        grid.innerHTML = this.filteredProfiles.map(profile => {
            if (currentAlignment === 'alignment-2') {
                // Alignment 2 - Side-by-side layout with all details
                return `
                    <div class="profile-card" data-id="${profile.id}">
                        <div class="profile-card__header">
                            <img src="${profile.avatar}" alt="${profile.name}" class="profile-card__avatar">
                            <div class="profile-card__info">
                                <h3>${profile.name}</h3>
                                <p class="profile-card__title">${profile.job_title}</p>
                            </div>
                        </div>
                        <div class="profile-card__handle">
                            <span class="badge badge--role">${profile.badge}</span>
                            @${profile.handle}
                        </div>
                        
                        <p class="profile-card__description">${profile.bio}</p>
                        
                        <div class="profile-card__stats">
                            <div class="stat-item add-on-hides">
                                <span class="stat-icon">📝</span>
                                <span class="stat-value">${profile.posts} Posts</span>
                            </div>
                            <div class="stat-item add-on-hides">
                                <span class="stat-icon">📅</span>
                                <span class="stat-value">${profile.joinDate}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-icon">✉️</span>
                                <span class="stat-value">${profile.email}</span>
                            </div>
                            <div class="stat-item add-on-hides">
                                <span class="stat-icon">🔑</span>
                                <span class="stat-value">${profile.signins.toLocaleString()} Signins</span>
                            </div>
                            <div class="stat-item add-on-hides">
                                <span class="stat-icon">👁️</span>
                                <span class="stat-value">${profile.pageViews.toLocaleString()} Page Views</span>
                            </div>
                            <div class="stat-item stat-item--full">
                                <span class="stat-icon">👥</span>
                                <span class="stat-value">${profile.subscriptions.join(', ')}</span>
                            </div>
                            <div class="stat-item add-on-hides">
                                <span class="stat-icon">🌐</span>
                                <span class="stat-value">${profile.ipAddress}</span>
                            </div>
                            <div class="stat-item add-on-hides">
                                <span class="stat-icon">🕐</span>
                                <span class="stat-value">${profile.lastActive}</span>
                            </div>
                        </div>
                        
                        <div class="profile-card__footer">
                            <span class="profile-card__location">📍 ${profile.location}</span>
                            <a href="#" class="profile-card__action">View Profile</a>
                        </div>
                    </div>
                `;
            } else {
                // Alignment 1 - Centered layout with essential details
                return `
                    <div class="profile-card" data-id="${profile.id}">
                        <div class="profile-card__header">
                            <img src="${profile.avatar}" alt="${profile.name}" class="profile-card__avatar">
                            <div class="profile-card__info">
                                <div class="profile-card__handle">
                                    <span class="badge badge--role">${profile.badge}</span>
                                    @${profile.handle}
                                </div>
                                <h3>${profile.name}</h3>
                                <p class="profile-card__title">${profile.job_title}, ${profile.company}</p>
                            </div>
                        </div>
                        
                        <div class="profile-card__badges">
                            <span class="badge badge--mvp add-on-hides">📝 ${profile.posts} Posts</span>
                            <span class="badge badge--location add-on-hides">📅 Joined ${profile.joinDate}</span>
                            <span class="badge badge--link">✉️ ${profile.email}</span>
                        </div>
                        
                        <div class="profile-card__footer">
                            <a href="#" class="profile-card__action">View Profile</a>
                        </div>
                    </div>
                `;
            }
        }).join('');

        // Add click event listeners to profile cards
        document.querySelectorAll('.profile-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('profile-card__link')) {
                    const profileId = card.dataset.id;
                    this.showProfileDetails(profileId);
                }
            });
        });
    }

    formatRegion(region) {
        const regionMap = {
            'north-america': 'North America',
            'europe': 'Europe',
            'asia-pacific': 'Asia Pacific',
            'latin-america': 'Latin America'
        };
        return regionMap[region] || region;
    }

    updateResultsCount() {
        const count = this.filteredProfiles.length;
        const resultsCount = document.getElementById('resultsCount');
        
        if (count === 0) {
            resultsCount.textContent = 'No profiles found';
        } else if (count === 1) {
            resultsCount.textContent = '1 profile found';
        } else if (count === this.profiles.length) {
            resultsCount.textContent = `Showing all ${count} profiles`;
        } else {
            resultsCount.textContent = `Showing ${count} of ${this.profiles.length} profiles`;
        }
    }

    showProfileDetails(profileId) {
        const profile = this.profiles.find(p => p.id == profileId);
        if (profile) {
            alert(`Profile Details:\n\nName: ${profile.name}\nTitle: ${profile.job_title}\nCompany: ${profile.company}\nLocation: ${profile.location}\n\nDescription: ${profile.bio}`);
        }
    }

    switchAlignment(alignment) {
        // Remove existing alignment classes
        document.body.classList.remove('alignment-1', 'alignment-2');
        // Add new alignment class
        document.body.classList.add(alignment);
        // Re-render profiles to apply new layout if profiles are loaded
        if (this.filteredProfiles && this.filteredProfiles.length > 0) {
            this.renderProfiles();
        }
    }

    switchStateArrangement(arrangement) {
        // Remove existing state arrangement classes
        document.body.classList.remove('state-side-by-side', 'state-by-line');
        
        // Add new state arrangement class
        if (arrangement === 'side-by-side') {
            document.body.classList.add('state-side-by-side');
        } else if (arrangement === 'by-line') {
            document.body.classList.add('state-by-line');
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CommunityLeaders();
});

// Add some utility functions for enhanced functionality
class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static animateCard(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.3s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Enhanced search with debouncing
const enhancedSearch = Utils.debounce((searchTerm) => {
    // Enhanced search logic could go here
    console.log('Enhanced search for:', searchTerm);
}, 300);