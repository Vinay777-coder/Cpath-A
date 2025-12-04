'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Smartphone, Code, Target, TrendingUp, CheckCircle2, Zap } from 'lucide-react';

export default function ReactNativeVsFlutterGuide() {
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/guides" style={{ display: 'inline-flex', alignItems: 'center', color: '#64748b', textDecoration: 'none', marginBottom: '1rem', fontSize: '0.875rem' }}>
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
            Back to Guides
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            React Native vs Flutter
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Comprehensive comparison of React Native and Flutter to help you choose the right cross-platform mobile development framework.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid #334155', marginBottom: '2rem' }}>
          {[
            { id: 'comparison', label: 'Framework Comparison', icon: Target },
            { id: 'development', label: 'Development Experience', icon: Code },
            { id: 'career', label: 'Career & Learning Path', icon: TrendingUp }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                border: 'none',
                backgroundColor: 'transparent',
                color: activeTab === id ? '#06b6d4' : '#64748b',
                borderBottom: activeTab === id ? '2px solid #06b6d4' : '2px solid transparent',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
            >
              <Icon size={16} style={{ marginRight: '0.5rem' }} />
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'comparison' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }}>
              {/* React Native */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#06b6d4', padding: '0.75rem', borderRadius: '8px', marginRight: '1rem' }}>
                    <Smartphone size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>React Native</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#06b6d4', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Overview</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    Created by Facebook (Meta), React Native uses JavaScript and React concepts to build native mobile applications for iOS and Android.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#06b6d4', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Key Strengths</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Leverages existing JavaScript/React knowledge</li>
                    <li>Large ecosystem and community</li>
                    <li>Hot reload for fast development</li>
                    <li>Code sharing between web and mobile</li>
                    <li>Native module integration</li>
                    <li>Backed by Meta with strong adoption</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#06b6d4', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Weaknesses</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Performance limitations for complex animations</li>
                    <li>Bridge-based architecture overhead</li>
                    <li>Fragmented ecosystem with version compatibility issues</li>
                    <li>Platform-specific code still needed for advanced features</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: '#06b6d4', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Popular Apps</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Facebook', 'Instagram', 'Shopify', 'Discord', 'Skype', 'Pinterest'].map(app => (
                      <span key={app} style={{ backgroundColor: '#06b6d4', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.875rem' }}>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Flutter */}
              <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ backgroundColor: '#3b82f6', padding: '0.75rem', borderRadius: '8px', marginRight: '1rem' }}>
                    <Zap size={24} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Flutter</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Overview</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    Developed by Google, Flutter uses Dart programming language and provides a complete UI toolkit for building natively compiled applications.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Key Strengths</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Superior performance with direct compilation</li>
                    <li>Consistent UI across all platforms</li>
                    <li>Rich set of customizable widgets</li>
                    <li>Excellent hot reload and development tools</li>
                    <li>Single codebase for mobile, web, and desktop</li>
                    <li>Growing rapidly with Google's backing</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Weaknesses</h4>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                    <li>Dart language learning curve</li>
                    <li>Larger app size compared to native</li>
                    <li>Smaller ecosystem and community</li>
                    <li>Limited platform-specific UI components</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Popular Apps</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Google Ads', 'Alibaba', 'eBay Motors', 'BMW', 'Tencent', 'Reflectly'].map(app => (
                      <span key={app} style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.875rem' }}>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Comparison */}
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Detailed Technical Comparison
              </h3>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  {
                    aspect: 'Programming Language',
                    reactNative: 'JavaScript/TypeScript - familiar to web developers',
                    flutter: 'Dart - modern language but requires learning',
                    winner: 'React Native'
                  },
                  {
                    aspect: 'Performance',
                    reactNative: 'Good performance, but bridge overhead for complex operations',
                    flutter: 'Excellent performance with direct compilation to native code',
                    winner: 'Flutter'
                  },
                  {
                    aspect: 'UI/UX Consistency',
                    reactNative: 'Platform-specific components, some inconsistencies',
                    flutter: 'Complete UI control with custom widgets, perfect consistency',
                    winner: 'Flutter'
                  },
                  {
                    aspect: 'Development Speed',
                    reactNative: 'Fast for web developers, code sharing with web apps',
                    flutter: 'Very fast with hot reload and comprehensive tooling',
                    winner: 'Tie'
                  },
                  {
                    aspect: 'Community & Ecosystem',
                    reactNative: 'Large, mature ecosystem with many third-party packages',
                    flutter: 'Growing rapidly but smaller ecosystem',
                    winner: 'React Native'
                  },
                  {
                    aspect: 'Learning Curve',
                    reactNative: 'Easy for React/JavaScript developers',
                    flutter: 'Steeper learning curve due to Dart and new concepts',
                    winner: 'React Native'
                  },
                  {
                    aspect: 'Platform Integration',
                    reactNative: 'Good native integration, requires platform-specific code',
                    flutter: 'Excellent integration with comprehensive platform APIs',
                    winner: 'Flutter'
                  },
                  {
                    aspect: 'Testing',
                    reactNative: 'Good testing support with Jest and Detox',
                    flutter: 'Excellent built-in testing framework',
                    winner: 'Flutter'
                  }
                ].map((comparison, index) => (
                  <div key={index} style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ color: '#f1f5f9', marginBottom: '1rem', fontSize: '1.125rem' }}>
                      {comparison.aspect}
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                      <div style={{ padding: '1rem', backgroundColor: '#1e293b', borderRadius: '6px', border: comparison.winner === 'React Native' || comparison.winner === 'Tie' ? '2px solid #06b6d4' : '1px solid #334155' }}>
                        <h5 style={{ color: '#06b6d4', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          React Native {comparison.winner === 'React Native' && '👑'}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>
                          {comparison.reactNative}
                        </p>
                      </div>
                      <div style={{ padding: '1rem', backgroundColor: '#1e293b', borderRadius: '6px', border: comparison.winner === 'Flutter' || comparison.winner === 'Tie' ? '2px solid #3b82f6' : '1px solid #334155' }}>
                        <h5 style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                          Flutter {comparison.winner === 'Flutter' && '👑'}
                        </h5>
                        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>
                          {comparison.flutter}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'development' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Development Experience & Workflow
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Setup & Getting Started */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Setup & Getting Started
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <h5 style={{ color: '#06b6d4', marginBottom: '1rem', fontSize: '1rem' }}>React Native Setup</h5>
                      <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        <pre style={{ margin: 0, color: '#e2e8f0' }}>{`# Install React Native CLI
npm install -g react-native-cli

# Create new project
npx react-native init MyApp

# Run on iOS
cd MyApp
npx react-native run-ios

# Run on Android
npx react-native run-android`}</pre>
                      </div>
                      <div style={{ marginBottom: '1rem' }}>
                        <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Prerequisites:</h6>
                        <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                          <li>Node.js and npm/yarn</li>
                          <li>Xcode (for iOS development)</li>
                          <li>Android Studio (for Android development)</li>
                          <li>JDK 8 or higher</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h5 style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1rem' }}>Flutter Setup</h5>
                      <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        <pre style={{ margin: 0, color: '#e2e8f0' }}>{`# Install Flutter SDK
git clone https://github.com/flutter/flutter.git

# Add to PATH
export PATH="$PATH:[PATH_TO_FLUTTER]/flutter/bin"

# Create new project
flutter create my_app

# Run the app
cd my_app
flutter run`}</pre>
                      </div>
                      <div>
                        <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Prerequisites:</h6>
                        <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                          <li>Flutter SDK</li>
                          <li>Xcode (for iOS development)</li>
                          <li>Android Studio (for Android development)</li>
                          <li>VS Code or Android Studio IDE</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Examples */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Code Structure Comparison
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <h5 style={{ color: '#06b6d4', marginBottom: '0.75rem', fontSize: '0.875rem' }}>React Native Component</h5>
                      <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.75rem', overflow: 'auto' }}>
                        <pre style={{ margin: 0, color: '#e2e8f0' }}>{`import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic
    console.log('Login:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;`}</pre>
                      </div>
                    </div>

                    <div>
                      <h5 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '0.875rem' }}>Flutter Widget</h5>
                      <div style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.75rem', overflow: 'auto' }}>
                        <pre style={{ margin: 0, color: '#e2e8f0' }}>{`import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  void _handleLogin() {
    // Login logic
    print('Login: \${_emailController.text}, \${_passwordController.text}');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[100],
      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Login',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 30),
            TextField(
              controller: _emailController,
              decoration: InputDecoration(
                hintText: 'Email',
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
                filled: true,
                fillColor: Colors.white,
              ),
              keyboardType: TextInputType.emailAddress,
            ),
            SizedBox(height: 15),
            TextField(
              controller: _passwordController,
              decoration: InputDecoration(
                hintText: 'Password',
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
                filled: true,
                fillColor: Colors.white,
              ),
              obscureText: true,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _handleLogin,
              child: Text(
                'Login',
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                ),
              ),
              style: ElevatedButton.styleFrom(
                primary: Colors.blue,
                padding: EdgeInsets.symmetric(vertical: 15),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
                minimumSize: Size(double.infinity, 50),
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }
}`}</pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Development Tools */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Development Tools & Debugging
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                      {
                        framework: 'React Native',
                        color: '#06b6d4',
                        tools: [
                          'Metro bundler for fast refresh',
                          'Flipper for debugging and profiling',
                          'React DevTools for component inspection',
                          'Chrome DevTools for JavaScript debugging',
                          'Reactotron for state management debugging',
                          'VS Code with React Native extensions'
                        ]
                      },
                      {
                        framework: 'Flutter',
                        color: '#3b82f6',
                        tools: [
                          'Hot reload and hot restart',
                          'Flutter Inspector for widget tree',
                          'Dart DevTools for performance profiling',
                          'Flutter Doctor for environment setup',
                          'Widget tests and integration tests',
                          'Android Studio/VS Code with Flutter plugins'
                        ]
                      }
                    ].map((section, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '6px' }}>
                        <h5 style={{ color: section.color, marginBottom: '1rem', fontSize: '1rem' }}>
                          {section.framework} Tools
                        </h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {section.tools.map((tool, idx) => (
                            <li key={idx} style={{ 
                              color: '#cbd5e1', 
                              fontSize: '0.875rem', 
                              marginBottom: '0.5rem',
                              paddingLeft: '1rem',
                              position: 'relative'
                            }}>
                              <CheckCircle2 size={12} style={{ 
                                position: 'absolute', 
                                left: 0, 
                                top: '0.25rem',
                                color: section.color 
                              }} />
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'career' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#f1f5f9' }}>
                Career Path & Learning Strategy
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Learning Timeline */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Learning Timeline (6 Months)
                  </h4>
                  
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      {
                        month: 'Month 1-2',
                        focus: 'Foundation & Setup',
                        reactNative: ['JavaScript/TypeScript mastery', 'React fundamentals', 'React Native basics', 'Navigation setup'],
                        flutter: ['Dart language basics', 'Flutter widget system', 'State management basics', 'Layout fundamentals'],
                        color: '#3b82f6'
                      },
                      {
                        month: 'Month 3-4',
                        focus: 'Intermediate Development',
                        reactNative: ['State management (Redux/Context)', 'API integration', 'Native modules', 'Platform-specific code'],
                        flutter: ['Advanced widgets', 'HTTP requests & JSON', 'State management (Provider/Bloc)', 'Platform channels'],
                        color: '#10b981'
                      },
                      {
                        month: 'Month 5-6',
                        focus: 'Advanced & Production',
                        reactNative: ['Performance optimization', 'Testing strategies', 'CI/CD setup', 'App store deployment'],
                        flutter: ['Custom animations', 'Testing framework', 'Performance profiling', 'Production deployment'],
                        color: '#f59e0b'
                      }
                    ].map((phase, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                          <div style={{ 
                            backgroundColor: phase.color, 
                            color: 'white', 
                            borderRadius: '50%', 
                            width: '32px', 
                            height: '32px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            marginRight: '1rem',
                            fontSize: '0.875rem',
                            fontWeight: 'bold'
                          }}>
                            {index + 1}
                          </div>
                          <div>
                            <h5 style={{ color: '#f1f5f9', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{phase.month}</h5>
                            <span style={{ color: phase.color, fontSize: '0.875rem', fontWeight: '600' }}>{phase.focus}</span>
                          </div>
                        </div>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                          <div>
                            <h6 style={{ color: '#06b6d4', marginBottom: '0.75rem', fontSize: '0.875rem' }}>React Native Focus</h6>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {phase.reactNative.map((item, idx) => (
                                <li key={idx} style={{ 
                                  color: '#cbd5e1', 
                                  fontSize: '0.875rem', 
                                  marginBottom: '0.25rem',
                                  paddingLeft: '1rem',
                                  position: 'relative'
                                }}>
                                  <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '0.5rem',
                                    width: '4px',
                                    height: '4px',
                                    backgroundColor: '#06b6d4',
                                    borderRadius: '50%'
                                  }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h6 style={{ color: '#3b82f6', marginBottom: '0.75rem', fontSize: '0.875rem' }}>Flutter Focus</h6>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {phase.flutter.map((item, idx) => (
                                <li key={idx} style={{ 
                                  color: '#cbd5e1', 
                                  fontSize: '0.875rem', 
                                  marginBottom: '0.25rem',
                                  paddingLeft: '1rem',
                                  position: 'relative'
                                }}>
                                  <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '0.5rem',
                                    width: '4px',
                                    height: '4px',
                                    backgroundColor: '#3b82f6',
                                    borderRadius: '50%'
                                  }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div style={{ backgroundColor: '#0f172a', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Career Opportunities & Salary Ranges
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                    {[
                      {
                        title: 'Mobile App Developer',
                        experience: '0-2 years',
                        salary: '$60,000 - $90,000',
                        responsibilities: ['Building mobile applications', 'Implementing UI/UX designs', 'Basic testing and debugging', 'Learning platform-specific features'],
                        color: '#3b82f6'
                      },
                      {
                        title: 'Senior Mobile Developer',
                        experience: '2-5 years',
                        salary: '$90,000 - $130,000',
                        responsibilities: ['Complex app architecture', 'Performance optimization', 'Mentoring junior developers', 'Cross-platform strategy'],
                        color: '#10b981'
                      },
                      {
                        title: 'Lead Mobile Engineer',
                        experience: '5-8 years',
                        salary: '$130,000 - $170,000',
                        responsibilities: ['Technical leadership', 'Architecture decisions', 'Team coordination', 'Technology evaluation'],
                        color: '#f59e0b'
                      },
                      {
                        title: 'Mobile Architect',
                        experience: '8+ years',
                        salary: '$170,000 - $220,000+',
                        responsibilities: ['Enterprise architecture', 'Technical strategy', 'Multiple team oversight', 'Innovation leadership'],
                        color: '#ef4444'
                      }
                    ].map((role, index) => (
                      <div key={index} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${role.color}20` }}>
                        <div style={{ marginBottom: '1rem' }}>
                          <h5 style={{ color: role.color, fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                            {role.title}
                          </h5>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{role.experience}</span>
                            <span style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>{role.salary}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h6 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Key Responsibilities:</h6>
                          <ul style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                            {role.responsibilities.map((resp, idx) => (
                              <li key={idx} style={{ marginBottom: '0.25rem' }}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decision Framework */}
                <div style={{ backgroundColor: '#8b5cf620', padding: '1.5rem', borderRadius: '8px', border: '1px solid #8b5cf6' }}>
                  <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.125rem' }}>
                    Framework for Making Your Choice
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    <div>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.75rem' }}>Choose React Native if:</h5>
                      <ul style={{ color: '#c4b5fd', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>You have JavaScript/React experience</li>
                        <li>You want to share code with web applications</li>
                        <li>You need extensive third-party library support</li>
                        <li>You're working with existing React team</li>
                        <li>You need rapid prototyping for web + mobile</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 style={{ color: '#f1f5f9', fontSize: '0.875rem', marginBottom: '0.75rem' }}>Choose Flutter if:</h5>
                      <ul style={{ color: '#c4b5fd', fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
                        <li>Performance is a critical requirement</li>
                        <li>You want pixel-perfect UI control</li>
                        <li>You're building for multiple platforms (mobile + web + desktop)</li>
                        <li>You don't mind learning Dart</li>
                        <li>You want cutting-edge mobile features</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}