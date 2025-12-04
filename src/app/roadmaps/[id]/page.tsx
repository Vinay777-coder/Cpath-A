'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { roadmapsDatabase } from '@/lib/roadmaps-data'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { 
  ArrowLeft,
  Clock,
  Users,
  BookOpen,
  ExternalLink,
  Play,
  Target,
  TrendingUp,
  Award,
  ChevronRight,
  Star
} from 'lucide-react'

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800 border-green-200',
  'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Advanced': 'bg-red-100 text-red-800 border-red-200',
} as const

export default function RoadmapDetailPage() {
  const params = useParams()
  const router = useRouter()
  const roadmapId = params?.id as string

  // Find the roadmap
  const roadmap = roadmapsDatabase.find(r => r.id === roadmapId)

  // Function to get learning URL for each step
  const getStepLearningUrl = (stepId: string) => {
    const stepUrls: Record<string, string> = {
      // Frontend Development steps
      'step-1-html-basics': 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
      'step-2-css-basics': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps',
      'step-3-responsive-design': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
      'step-4-javascript-basics': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps',
      'step-5-dom-manipulation': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents',
      'step-6-modern-javascript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      'step-7-version-control': 'https://git-scm.com/docs/gittutorial',
      'step-8-react-fundamentals': 'https://react.dev/learn',
      'step-9-react-hooks': 'https://react.dev/reference/react',
      'step-10-routing-navigation': 'https://reactrouter.com/en/main/start/tutorial',
      'step-11-api-integration': 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
      'step-12-build-tools': 'https://vitejs.dev/guide/',
      
      // Backend Development steps
      'step-1-programming-basics': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps',
      'step-2-server-basics': 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps',
      'step-3-nodejs-basics': 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
      'step-4-express-framework': 'https://expressjs.com/en/starter/installing.html',
      'step-5-database-basics': 'https://www.w3schools.com/sql/',
      'step-6-mongodb': 'https://www.mongodb.com/docs/manual/tutorial/',
      'step-7-rest-api': 'https://restfulapi.net/',
      'step-8-authentication': 'https://auth0.com/docs/get-started',
      'step-9-testing': 'https://jestjs.io/docs/getting-started',
      'step-10-deployment': 'https://nodejs.org/en/learn/getting-started/nodejs-with-webassembly',
      
      // Full Stack Development steps
      'step-1-web-fundamentals': 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web',
      'step-2-frontend-advanced': 'https://react.dev/learn',
      'step-3-backend-basics': 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
      'step-4-database-integration': 'https://www.mongodb.com/docs/manual/tutorial/',
      'step-5-fullstack-project': 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
      'step-6-advanced-topics': 'https://jestjs.io/docs/getting-started',
      'step-7-deployment': 'https://docs.netlify.com/get-started/',
      
      // React Development steps
      'step-1-react-setup': 'https://react.dev/learn/installation',
      'step-2-jsx-components': 'https://react.dev/learn/writing-markup-with-jsx',
      'step-3-state-events': 'https://react.dev/learn/adding-interactivity',
      'step-4-react-hooks': 'https://react.dev/reference/react',
      'step-5-routing': 'https://reactrouter.com/en/main/start/tutorial',
      'step-6-state-management': 'https://redux-toolkit.js.org/introduction/getting-started',
      'step-7-testing': 'https://testing-library.com/docs/react-testing-library/intro/',
      'step-8-optimization': 'https://react.dev/learn/render-and-commit',
      
      // Python Programming steps  
      'step-1-python-basics': 'https://docs.python.org/3/tutorial/introduction.html',
      'step-2-control-structures': 'https://docs.python.org/3/tutorial/controlflow.html',
      'step-3-data-structures': 'https://docs.python.org/3/tutorial/datastructures.html',
      'step-4-functions': 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions',
      'step-5-oop': 'https://docs.python.org/3/tutorial/classes.html',
      'step-6-file-handling': 'https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files',
      'step-7-libraries': 'https://docs.python.org/3/tutorial/modules.html',
      'step-8-projects': 'https://realpython.com/tutorials/projects/',
      
      // JavaScript Mastery steps
      'step-1-js-basics': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps',
      'step-2-functions-scope': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions',
      'step-3-objects-arrays': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects',
      'step-4-dom-manipulation': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents',
      'step-5-async-programming': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous',
      'step-6-es6-plus': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules',
      'step-7-oop-prototypes': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes',
      'step-8-advanced-concepts': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      
      // Data Science steps
      'step-1-ds-python-basics': 'https://docs.python.org/3/tutorial/introduction.html',
      'step-2-ds-math-stats': 'https://www.khanacademy.org/math/statistics-probability',
      'step-3-ds-data-manipulation': 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/',
      'step-4-ds-data-visualization': 'https://matplotlib.org/stable/tutorials/',
      'step-5-ds-machine-learning': 'https://scikit-learn.org/stable/tutorial/',
      'step-6-ds-advanced-ml': 'https://scikit-learn.org/stable/user_guide.html',
      'step-7-ds-projects': 'https://www.kaggle.com/learn',
      
      // DevOps Engineer steps
      'step-1-linux-basics': 'https://linuxjourney.com/',
      'step-2-networking': 'https://www.cisco.com/c/en/us/solutions/small-business/networking/networking-basics.html',
      'step-3-version-control': 'https://git-scm.com/docs/gittutorial',
      'step-4-containerization': 'https://docs.docker.com/get-started/',
      'step-5-kubernetes': 'https://kubernetes.io/docs/tutorials/',
      'step-6-cloud-platforms': 'https://aws.amazon.com/getting-started/',
      'step-7-cicd': 'https://docs.github.com/en/actions/quickstart',
      'step-8-monitoring': 'https://prometheus.io/docs/introduction/first_steps/',
      
      // Docker Containerization steps
      'step-1-container-basics': 'https://docs.docker.com/get-started/overview/',
      'step-2-docker-images': 'https://docs.docker.com/get-started/',
      'step-3-dockerfile': 'https://docs.docker.com/engine/reference/builder/',
      'step-4-data-volumes': 'https://docs.docker.com/storage/',
      'step-5-networking': 'https://docs.docker.com/network/',
      'step-6-docker-compose': 'https://docs.docker.com/compose/',
      'step-7-production': 'https://docs.docker.com/config/pruning/',
      
      // Vue.js Development steps
      'step-1-vue-basics': 'https://vuejs.org/guide/introduction.html',
      'step-2-components': 'https://vuejs.org/guide/essentials/component-basics.html',
      'step-3-directives': 'https://vuejs.org/guide/essentials/template-syntax.html',
      'step-4-vue-router': 'https://router.vuejs.org/guide/',
      'step-5-state-management': 'https://vuex.vuejs.org/guide/',
      'step-6-composition-api': 'https://vuejs.org/guide/extras/composition-api-faq.html',
      'step-7-testing-deployment': 'https://vuejs.org/guide/scaling-up/testing.html',
      
      // Angular Development steps
      'step-1-typescript-basics': 'https://www.typescriptlang.org/docs/',
      'step-2-angular-setup': 'https://angular.io/guide/setup-local',
      'step-3-components': 'https://angular.io/guide/component-overview',
      'step-4-services-di': 'https://angular.io/guide/dependency-injection',
      'step-5-angular-routing': 'https://angular.io/guide/routing-overview',
      'step-6-forms': 'https://angular.io/guide/reactive-forms',
      'step-7-http-observables': 'https://angular.io/guide/http',
      'step-8-testing-deployment': 'https://angular.io/guide/testing',
      
      // TypeScript Mastery steps
      'step-1-ts-basics': 'https://www.typescriptlang.org/docs/handbook/2/basic-types.html',
      'step-2-ts-interfaces': 'https://www.typescriptlang.org/docs/handbook/2/objects.html',
      'step-3-ts-functions': 'https://www.typescriptlang.org/docs/handbook/2/functions.html',
      'step-4-ts-classes': 'https://www.typescriptlang.org/docs/handbook/2/classes.html',
      'step-5-ts-modules': 'https://www.typescriptlang.org/docs/handbook/2/modules.html',
      
      // Node.js Backend steps
      'step-1-nodejs-basics': 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
      'step-2-nodejs-modules': 'https://nodejs.org/en/learn/modules/introduction-to-modules',
      'step-3-nodejs-fs-http': 'https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs',
      'step-4-nodejs-express': 'https://expressjs.com/en/starter/installing.html',
      'step-5-nodejs-database': 'https://www.mongodb.com/docs/drivers/node/',
      'step-6-nodejs-auth': 'https://auth0.com/docs/quickstart/backend/nodejs',
      'step-7-nodejs-testing': 'https://jestjs.io/docs/getting-started',
      
      // AWS Cloud Platform steps
      'step-1-aws-basics': 'https://aws.amazon.com/getting-started/',
      'step-2-aws-compute': 'https://docs.aws.amazon.com/ec2/latest/userguide/EC2_GetStarted.html',
      'step-3-aws-storage': 'https://docs.aws.amazon.com/s3/latest/userguide/tutorial-s3-webhosting.html',
      'step-4-aws-database': 'https://docs.aws.amazon.com/rds/latest/userguide/CHAP_GettingStarted.html',
      'step-5-aws-networking': 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-getting-started.html',
      'step-6-aws-security': 'https://docs.aws.amazon.com/iam/latest/userguide/getting-started.html',
      'step-7-aws-monitoring': 'https://docs.aws.amazon.com/cloudwatch/latest/monitoring/GettingStarted.html',
      
      // Machine Learning Engineer steps
      'step-1-ml-python': 'https://scikit-learn.org/stable/getting_started.html',
      'step-2-ml-math': 'https://www.khanacademy.org/math/linear-algebra',
      'step-3-ml-algorithms': 'https://scikit-learn.org/stable/supervised_learning.html',
      'step-4-ml-frameworks': 'https://www.tensorflow.org/tutorials',
      'step-5-ml-deployment': 'https://mlops.org/',
      'step-6-ml-projects': 'https://www.kaggle.com/learn',
      
      // Cyber Security steps
      'step-1-cybersec-fundamentals': 'https://www.cybrary.it/course/comptia-security-plus/',
      'step-2-cybersec-networking': 'https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/network-security-basics.html',
      'step-3-cybersec-os-security': 'https://docs.microsoft.com/en-us/security/',
      'step-4-cybersec-tools': 'https://www.kali.org/docs/',
      'step-5-cybersec-ethical-hacking': 'https://owasp.org/www-project-web-security-testing-guide/',
      'step-6-cybersec-incident-response': 'https://www.sans.org/white-papers/incident-handling-step-by-step/',
      
      // System Design steps
      'step-1-sysdesign-basics': 'https://github.com/donnemartin/system-design-primer',
      'step-2-sysdesign-scalability': 'https://highscalability.com/blog/category/example/',
      'step-3-sysdesign-databases': 'https://db-engines.com/en/articles',
      'step-4-sysdesign-caching': 'https://redis.io/docs/get-started/',
      'step-5-sysdesign-microservices': 'https://microservices.io/patterns/',
      'step-6-sysdesign-case-studies': 'https://github.com/binhnguyennus/awesome-scalability',
      
      // Android Development steps
      'step-1-android-setup': 'https://developer.android.com/studio/install',
      'step-2-android-kotlin': 'https://kotlinlang.org/docs/getting-started.html',
      'step-3-android-ui': 'https://developer.android.com/guide/topics/ui/declaring-layout',
      'step-4-android-activities': 'https://developer.android.com/guide/components/activities/intro-activities',
      'step-5-android-data': 'https://developer.android.com/training/data-storage',
      'step-6-android-networking': 'https://developer.android.com/training/volley',
      'step-7-android-publish': 'https://developer.android.com/studio/publish',
      
      // iOS Development steps
      'step-1-ios-setup': 'https://developer.apple.com/xcode/',
      'step-2-ios-swift': 'https://docs.swift.org/swift-book/',
      'step-3-ios-ui': 'https://developer.apple.com/documentation/uikit',
      'step-4-ios-mvc': 'https://developer.apple.com/documentation/uikit/view_controllers',
      'step-5-ios-data': 'https://developer.apple.com/documentation/coredata',
      'step-6-ios-networking': 'https://developer.apple.com/documentation/foundation/url_loading_system',
      'step-7-ios-publish': 'https://developer.apple.com/app-store/submissions/',
      
      // Flutter Development steps
      'step-1-flutter-setup': 'https://docs.flutter.dev/get-started/install',
      'step-2-flutter-dart': 'https://dart.dev/guides/language/language-tour',
      'step-3-flutter-widgets': 'https://docs.flutter.dev/development/ui/widgets-intro',
      'step-4-flutter-layouts': 'https://docs.flutter.dev/development/ui/layout',
      'step-5-flutter-navigation': 'https://docs.flutter.dev/cookbook/navigation/navigation-basics',
      'step-6-flutter-state': 'https://docs.flutter.dev/development/data-and-backend/state-mgmt/intro',
      'step-7-flutter-deploy': 'https://docs.flutter.dev/deployment',
      
      // Game Developer steps
      'step-1-game-fundamentals': 'https://docs.unity3d.com/Manual/CreatingGameplay.html',
      'step-2-csharp-basics': 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
      'step-3-unity-basics': 'https://learn.unity.com/pathway/unity-essentials',
      'step-4-2d-game-dev': 'https://learn.unity.com/pathway/2d-game-creation',
      'step-5-3d-game-dev': 'https://learn.unity.com/pathway/3d-game-creation',
      'step-6-game-mechanics': 'https://docs.unity3d.com/Manual/UISystem.html',
      'step-7-game-optimization': 'https://docs.unity3d.com/Manual/BestPracticeGuides.html',
      
      // React Native steps
      'step-1-rn-setup': 'https://reactnative.dev/docs/environment-setup',
      'step-2-rn-components': 'https://reactnative.dev/docs/intro-react-native-components',
      'step-3-rn-navigation': 'https://reactnavigation.org/docs/getting-started/',
      'step-4-rn-state': 'https://reactnative.dev/docs/state',
      'step-5-rn-native-apis': 'https://reactnative.dev/docs/platform-specific-code',
      'step-6-rn-networking': 'https://reactnative.dev/docs/network',
      'step-7-rn-deployment': 'https://reactnative.dev/docs/running-on-device',
      
      // Spring Boot steps
      'step-1-sb-setup': 'https://spring.io/guides/gs/spring-boot/',
      'step-2-sb-fundamentals': 'https://docs.spring.io/spring-boot/docs/current/reference/html/features.html',
      'step-3-sb-web': 'https://spring.io/guides/gs/rest-service/',
      'step-4-sb-data': 'https://spring.io/guides/gs/accessing-data-jpa/',
      'step-5-sb-security': 'https://spring.io/guides/gs/securing-web/',
      'step-6-sb-testing': 'https://spring.io/guides/gs/testing-web/',
      'step-7-sb-microservices': 'https://spring.io/guides/gs/centralized-configuration/',
      
      // Java Programming steps (GeeksforGeeks)
      'step-1-java-setup': 'https://www.geeksforgeeks.org/setting-environment-java/',
      'step-2-java-oop': 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/',
      'step-3-java-collections': 'https://www.geeksforgeeks.org/collections-in-java-2/',
      'step-4-java-exceptions': 'https://www.geeksforgeeks.org/exceptions-in-java/',
      'step-5-java-multithreading': 'https://www.geeksforgeeks.org/multithreading-in-java/',
      'step-6-java-advanced': 'https://www.geeksforgeeks.org/lambda-expressions-java-8/',
      'step-7-java-frameworks': 'https://www.geeksforgeeks.org/introduction-to-spring-framework/',
      
      // Go Programming steps
      'step-1-go-setup': 'https://go.dev/doc/tutorial/getting-started',
      'step-2-go-types': 'https://go.dev/tour/basics/',
      'step-3-go-functions': 'https://go.dev/tour/methods/',
      'step-4-go-concurrency': 'https://go.dev/tour/concurrency/',
      'step-5-go-web': 'https://go.dev/doc/tutorial/web-service-gin',
      'step-6-go-advanced': 'https://go.dev/doc/effective_go',
      
      // C++ Programming steps
      'step-1-cpp-basics': 'https://www.learncpp.com/',
      'step-2-cpp-memory': 'https://isocpp.org/wiki/faq/pointers',
      'step-3-cpp-oop': 'https://www.learncpp.com/cpp-tutorial/introduction-to-classes/',
      'step-4-cpp-stl': 'https://www.cplusplus.com/reference/stl/',
      'step-5-cpp-templates': 'https://www.cplusplus.com/doc/oldtutorial/templates/',
      'step-6-cpp-advanced': 'https://isocpp.org/std/the-standard',
      'step-7-cpp-projects': 'https://github.com/fffaraz/awesome-cpp',
      
      // Rust Programming steps
      'step-1-rust-setup': 'https://doc.rust-lang.org/book/ch01-01-installation.html',
      'step-2-rust-ownership': 'https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html',
      'step-3-rust-structures': 'https://doc.rust-lang.org/book/ch05-00-structs.html',
      'step-4-rust-traits': 'https://doc.rust-lang.org/book/ch10-02-traits.html',
      'step-5-rust-concurrency': 'https://doc.rust-lang.org/book/ch16-00-fearless-concurrency.html',
      'step-6-rust-ecosystem': 'https://crates.io/',
      
      // PHP Development steps
      'step-1-php-basics': 'https://www.php.net/manual/en/tutorial.php',
      'step-2-php-web': 'https://www.php.net/manual/en/tutorial.forms.php',
      'step-3-php-database': 'https://www.php.net/manual/en/book.pdo.php',
      'step-4-php-oop': 'https://www.php.net/manual/en/language.oop5.php',
      'step-5-php-frameworks': 'https://laravel.com/docs/10.x',
      'step-6-php-advanced': 'https://www.php.net/manual/en/features.php',
      
      // Kubernetes Orchestration steps
      'step-1-k8s-basics': 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
      'step-2-k8s-workloads': 'https://kubernetes.io/docs/concepts/workloads/',
      'step-3-k8s-networking': 'https://kubernetes.io/docs/concepts/services-networking/',
      'step-4-k8s-storage': 'https://kubernetes.io/docs/concepts/storage/',
      'step-5-k8s-security': 'https://kubernetes.io/docs/concepts/security/',
      'step-6-k8s-advanced': 'https://helm.sh/docs/intro/quickstart/',
      
      // Git and GitHub steps
      'step-1-git-basics': 'https://git-scm.com/docs/gittutorial',
      'step-2-git-workflow': 'https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows',
      'step-3-github-basics': 'https://docs.github.com/en/get-started/quickstart',
      'step-4-collaboration': 'https://docs.github.com/en/pull-requests',
      'step-5-advanced-git': 'https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging',
      
      // GraphQL API Development steps
      'step-1-graphql-basics': 'https://graphql.org/learn/',
      'step-2-graphql-schema': 'https://graphql.org/learn/schema/',
      'step-3-graphql-operations': 'https://graphql.org/learn/queries/',
      'step-4-graphql-resolvers': 'https://graphql.org/learn/execution/',
      'step-5-graphql-advanced': 'https://www.apollographql.com/docs/',
      'step-6-graphql-production': 'https://graphql.org/learn/best-practices/',
      
      // MongoDB Database steps
      'step-1-mongodb-basics': 'https://docs.mongodb.com/manual/tutorial/getting-started/',
      'step-2-mongodb-crud': 'https://docs.mongodb.com/manual/crud/',
      'step-3-mongodb-modeling': 'https://docs.mongodb.com/manual/core/data-modeling-introduction/',
      'step-4-mongodb-indexing': 'https://docs.mongodb.com/manual/indexes/',
      'step-5-mongodb-aggregation': 'https://docs.mongodb.com/manual/aggregation/',
      'step-6-mongodb-production': 'https://docs.mongodb.com/manual/replication/',
      
      // Redis Database steps
      'step-1-redis-basics': 'https://redis.io/docs/latest/get-started/',
      'step-2-redis-data-types': 'https://redis.io/docs/latest/data-types/',
      'step-3-redis-caching': 'https://redis.io/docs/latest/develop/use-cases/caching/',
      'step-4-redis-advanced': 'https://redis.io/docs/latest/develop/interact/pubsub/',
      'step-5-redis-production': 'https://redis.io/docs/latest/operate/oss_and_stack/management/replication/',
      
      // Blockchain Developer steps
      'step-1-blockchain-fundamentals-basic': 'https://bitcoin.org/bitcoin.pdf',
      'step-2-ethereum-basics-basic': 'https://ethereum.org/en/developers/docs/',
      'step-3-solidity-programming-basic': 'https://docs.soliditylang.org/',
      'step-4-web3-development-basic': 'https://web3js.readthedocs.io/',
      'step-5-advanced-concepts-basic': 'https://docs.openzeppelin.com/',
      'step-6-production-deployment-basic': 'https://hardhat.org/tutorial/',
      
      // UX Design steps
      'step-1-ux-fundamentals': 'https://www.interaction-design.org/literature/topics/design-thinking',
      'step-2-user-research': 'https://www.nngroup.com/articles/which-ux-research-methods/',
      'step-3-information-architecture': 'https://www.usability.gov/what-and-why/information-architecture.html',
      'step-4-prototyping': 'https://www.figma.com/prototyping/',
      'step-5-visual-design': 'https://material.io/design',
      'step-6-testing-iteration': 'https://www.nngroup.com/articles/usability-testing-101/',
      
      // Microsoft Azure steps
      'step-1-azure-basics': 'https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview',
      'step-2-azure-compute': 'https://docs.microsoft.com/en-us/azure/virtual-machines/',
      'step-3-azure-storage': 'https://docs.microsoft.com/en-us/azure/storage/',
      'step-4-azure-networking': 'https://docs.microsoft.com/en-us/azure/virtual-network/',
      'step-5-azure-devops': 'https://docs.microsoft.com/en-us/azure/devops/',
      'step-6-azure-advanced': 'https://docs.microsoft.com/en-us/azure/aks/',
      
      // Google Cloud Platform steps
      'step-1-gcp-basics': 'https://cloud.google.com/docs/get-started',
      'step-2-gcp-compute': 'https://cloud.google.com/compute/docs',
      'step-3-gcp-storage': 'https://cloud.google.com/storage/docs',
      'step-4-gcp-networking': 'https://cloud.google.com/vpc/docs',
      'step-5-gcp-devops': 'https://cloud.google.com/build/docs',
      'step-6-gcp-advanced': 'https://cloud.google.com/ai/docs',
      
      // Laravel Framework steps
      'step-1-laravel-setup': 'https://laravel.com/docs/10.x/installation',
      'step-2-laravel-fundamentals': 'https://laravel.com/docs/10.x/routing',
      'step-3-laravel-database': 'https://laravel.com/docs/10.x/eloquent',
      'step-4-laravel-advanced': 'https://laravel.com/docs/10.x/authentication',
      'step-5-laravel-apis': 'https://laravel.com/docs/10.x/eloquent-resources',
      'step-6-laravel-production': 'https://laravel.com/docs/10.x/deployment',
      
      // Django Framework steps
      'step-1-django-setup': 'https://docs.djangoproject.com/en/4.2/intro/tutorial01/',
      'step-2-django-mvt': 'https://docs.djangoproject.com/en/4.2/topics/http/views/',
      'step-3-django-models': 'https://docs.djangoproject.com/en/4.2/topics/db/models/',
      'step-4-django-admin': 'https://docs.djangoproject.com/en/4.2/ref/contrib/admin/',
      'step-5-django-rest': 'https://www.django-rest-framework.org/tutorial/quickstart/',
      'step-6-django-production': 'https://docs.djangoproject.com/en/4.2/topics/testing/',
      
      // Flask Microframework steps
      'step-1-flask-basics': 'https://flask.palletsprojects.com/en/2.3.x/quickstart/',
      'step-2-flask-templates': 'https://flask.palletsprojects.com/en/2.3.x/templating/',
      'step-3-flask-forms': 'https://flask.palletsprojects.com/en/2.3.x/patterns/wtforms/',
      'step-4-flask-database': 'https://flask-sqlalchemy.palletsprojects.com/',
      'step-5-flask-apis': 'https://flask-restful.readthedocs.io/',
      'step-6-flask-production': 'https://flask.palletsprojects.com/en/2.3.x/testing/',
      
      // Next.js Framework steps
      'step-1-nextjs-setup': 'https://nextjs.org/docs/getting-started/installation',
      'step-2-nextjs-pages': 'https://nextjs.org/docs/pages/building-your-application/routing',
      'step-3-nextjs-data-fetching': 'https://nextjs.org/docs/pages/building-your-application/data-fetching',
      'step-4-nextjs-api-routes': 'https://nextjs.org/docs/pages/building-your-application/routing/api-routes',
      'step-5-nextjs-optimization': 'https://nextjs.org/docs/pages/building-your-application/optimizing',
      'step-6-nextjs-deployment': 'https://nextjs.org/docs/pages/building-your-application/deploying',
      
      // Svelte Development steps
      'step-1-svelte-basics': 'https://svelte.dev/tutorial/basics',
      'step-2-svelte-reactivity': 'https://svelte.dev/tutorial/reactive-assignments',
      'step-3-svelte-components': 'https://svelte.dev/tutorial/nested-components',
      'step-4-svelte-styling': 'https://svelte.dev/tutorial/classes',
      'step-5-sveltekit': 'https://kit.svelte.dev/docs/introduction',
      'step-6-svelte-production': 'https://svelte.dev/docs#compile-time-svelte-compile',
      
      // PostgreSQL Database steps
      'step-1-postgresql-setup': 'https://www.postgresql.org/docs/current/tutorial-install.html',
      'step-2-postgresql-sql': 'https://www.postgresql.org/docs/current/tutorial-sql.html',
      'step-3-postgresql-design': 'https://www.postgresql.org/docs/current/ddl.html',
      'step-4-postgresql-performance': 'https://www.postgresql.org/docs/current/indexes.html',
      'step-5-postgresql-advanced': 'https://www.postgresql.org/docs/current/plpgsql.html',
      'step-6-postgresql-production': 'https://www.postgresql.org/docs/current/backup.html',
      
      // Jenkins CI/CD steps
      'step-1-jenkins-setup': 'https://www.jenkins.io/doc/book/installing/',
      'step-2-jenkins-jobs': 'https://www.jenkins.io/doc/book/using/',
      'step-3-jenkins-pipelines': 'https://www.jenkins.io/doc/book/pipeline/',
      'step-4-jenkins-integration': 'https://www.jenkins.io/doc/book/pipeline/syntax/',
      'step-5-jenkins-deployment': 'https://www.jenkins.io/doc/book/blueocean/',
      'step-6-jenkins-monitoring': 'https://www.jenkins.io/doc/book/system-administration/',
      
      // GitHub Actions steps
      'step-1-gha-basics': 'https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions',
      'step-2-gha-actions': 'https://docs.github.com/en/actions/learn-github-actions/finding-and-customizing-actions',
      'step-3-gha-cicd': 'https://docs.github.com/en/actions/automating-builds-and-tests',
      'step-4-gha-advanced': 'https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions',
      
      // Vite Build Tool steps
      'step-1-vite-setup': 'https://vitejs.dev/guide/',
      'step-2-vite-features': 'https://vitejs.dev/guide/features.html',
      'step-3-vite-plugins': 'https://vitejs.dev/guide/using-plugins.html',
      'step-4-vite-optimization': 'https://vitejs.dev/guide/build.html',
      'step-5-advanced-vite': 'https://vitejs.dev/guide/backend-integration.html',
      
      // Backend Beginner steps
      'step-1-backend-basics': 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
      'step-2-server-concepts': 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps',
      'step-3-database-intro': 'https://www.mongodb.com/docs/manual/tutorial/getting-started/',
      'step-4-api-development': 'https://expressjs.com/en/starter/installing.html',
      'step-5-authentication': 'https://auth0.com/docs/get-started',
      'step-6-deployment': 'https://nodejs.org/en/learn/getting-started/nodejs-docker',
      
      // Firebase Development steps
      'step-1-firebase-setup': 'https://firebase.google.com/docs/web/setup',
      'step-2-firebase-auth': 'https://firebase.google.com/docs/auth/web/start',
      'step-3-firestore': 'https://firebase.google.com/docs/firestore/quickstart',
      'step-4-firebase-hosting': 'https://firebase.google.com/docs/hosting/quickstart',
      'step-5-firebase-functions': 'https://firebase.google.com/docs/functions/get-started',
      'step-6-firebase-analytics': 'https://firebase.google.com/docs/analytics/get-started',
      
      // Prompt Engineering steps
      'step-1-prompt-basics': 'https://learn.deeplearning.ai/chatgpt-prompt-eng',
      'step-2-advanced-techniques': 'https://www.promptingguide.ai/techniques/cot',
      'step-3-domain-applications': 'https://platform.openai.com/docs/guides/prompt-engineering',
      'step-4-optimization-evaluation': 'https://www.anthropic.com/research/',
      'step-5-safety-ethics': 'https://www.anthropic.com/constitutional-ai-paper',
      
      // DevOps Beginner steps
      'step-1-devops-basics': 'https://www.atlassian.com/devops',
      'step-2-version-control': 'https://git-scm.com/docs/gittutorial',
      'step-3-containerization': 'https://docs.docker.com/get-started/',
      'step-4-ci-cd': 'https://docs.github.com/en/actions/quickstart',
      'step-5-cloud-basics': 'https://aws.amazon.com/getting-started/',
      'step-6-monitoring': 'https://prometheus.io/docs/introduction/overview/',
      
      // Supabase Development steps
      'step-1-supabase-setup': 'https://supabase.com/docs/guides/getting-started/quickstarts/nextjs',
      'step-2-supabase-auth': 'https://supabase.com/docs/guides/auth',
      'step-3-supabase-database': 'https://supabase.com/docs/guides/database',
      'step-4-supabase-realtime': 'https://supabase.com/docs/guides/realtime',
      'step-5-supabase-storage': 'https://supabase.com/docs/guides/storage',
      'step-6-supabase-edge': 'https://supabase.com/docs/guides/functions',
      
      // WordPress Developer steps
      'step-1-wp-basics': 'https://developer.wordpress.org/themes/getting-started/',
      'step-2-wp-themes': 'https://developer.wordpress.org/themes/basics/',
      'step-3-wp-plugins': 'https://developer.wordpress.org/plugins/',
      'step-4-wp-customizer': 'https://developer.wordpress.org/themes/customize-api/',
      'step-5-wp-gutenberg': 'https://developer.wordpress.org/block-editor/',
      'step-6-wp-advanced': 'https://developer.wordpress.org/rest-api/',
      
      // Technical Writing steps
      'step-1-writing-basics': 'https://developers.google.com/tech-writing/one',
      'step-2-documentation': 'https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/',
      'step-3-api-documentation': 'https://swagger.io/resources/articles/best-practices-in-api-documentation/',
      'step-4-content-strategy': 'https://contentstrategy.com/',
      'step-5-technical-editing': 'https://www.prismnet.com/~hcexres/textbook/',
      'step-6-publishing-tools': 'https://docusaurus.io/docs',
      
      // Data Structures and Algorithms steps
      'step-1-dsa-basics': 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
      'step-2-arrays-strings': 'https://takeuforward.org/data-structure/introduction-to-arrays/',
      'step-3-linked-lists': 'https://takeuforward.org/data-structure/introduction-to-linked-list/',
      'step-4-stacks-queues': 'https://takeuforward.org/data-structure/implement-stack-using-array/',
      'step-5-trees-graphs': 'https://takeuforward.org/data-structure/introduction-to-binary-trees/',
      'step-6-dynamic-programming': 'https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/',
      'step-7-advanced-algorithms': 'https://takeuforward.org/graph/graph-representation-in-c/',
      
      // Product Manager steps
      'step-1-pm-fundamentals-basic': 'https://www.productplan.com/learn/product-management-fundamentals/',
      'step-2-market-research-basic': 'https://www.uxpin.com/studio/blog/what-is-market-research/',
      'step-3-product-planning-basic': 'https://www.productplan.com/roadmap-basics/',
      'step-4-requirements-design-basic': 'https://www.atlassian.com/agile/requirements',
      'step-5-agile-execution-basic': 'https://www.scrum.org/resources/what-is-scrum',
      'step-6-analytics-optimization-basic': 'https://mixpanel.com/blog/product-analytics-guide/',
      
      // Data Analyst steps
      'step-1-excel-fundamentals': 'https://support.microsoft.com/en-us/office/excel-for-windows-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb',
      'step-2-sql-databases': 'https://www.w3schools.com/sql/',
      'step-3-statistics-analysis': 'https://www.khanacademy.org/math/statistics-probability',
      'step-4-python-analysis': 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/',
      'step-5-data-visualization': 'https://public.tableau.com/en-us/s/resources',
      'step-6-business-analysis': 'https://www.coursera.org/learn/business-analytics',
      
      // Spring Framework steps
      'step-1-spring-core': 'https://docs.spring.io/spring-framework/docs/current/reference/html/core.html',
      'step-2-spring-mvc': 'https://docs.spring.io/spring-framework/docs/current/reference/html/web.html',
      'step-3-spring-boot': 'https://spring.io/guides/gs/spring-boot/',
      'step-4-spring-data': 'https://spring.io/projects/spring-data-jpa',
      'step-5-spring-security': 'https://spring.io/guides/gs/securing-web/',
      'step-6-spring-advanced': 'https://spring.io/projects/spring-cloud',
      
      // Infrastructure as Code (Terraform) steps
      'step-1-terraform-basics': 'https://learn.hashicorp.com/tutorials/terraform/install-cli',
      'step-2-terraform-config': 'https://learn.hashicorp.com/tutorials/terraform/aws-build',
      'step-3-terraform-state': 'https://learn.hashicorp.com/tutorials/terraform/aws-change',
      'step-4-terraform-modules': 'https://learn.hashicorp.com/tutorials/terraform/module',
      'step-5-terraform-advanced': 'https://learn.hashicorp.com/tutorials/terraform/organize-configuration',
      'step-6-terraform-production': 'https://learn.hashicorp.com/collections/terraform/cloud-get-started',
      
      // Computer Science steps
      'step-1-cs-fundamentals': 'https://www.khanacademy.org/computing/computer-science',
      'step-2-cs-programming': 'https://www.codecademy.com/learn/learn-how-to-code',
      'step-3-cs-data-structures': 'https://www.geeksforgeeks.org/data-structures/',
      'step-4-cs-algorithms': 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/',
      'step-5-cs-operating-systems': 'https://www.tutorialspoint.com/operating_system/index.htm',
      'step-6-cs-networks': 'https://www.geeksforgeeks.org/computer-network-tutorials/',
      'step-7-cs-databases': 'https://www.w3schools.com/sql/',
      'step-8-cs-software-eng': 'https://www.geeksforgeeks.org/software-engineering/',
      

      
      // Monitoring & Observability (Prometheus) steps
      'step-1-prometheus-basics': 'https://prometheus.io/docs/introduction/overview/',
      'step-2-prometheus-config': 'https://prometheus.io/docs/prometheus/latest/configuration/',
      'step-3-prometheus-queries': 'https://prometheus.io/docs/prometheus/latest/querying/basics/',
      'step-4-prometheus-alerting': 'https://prometheus.io/docs/alerting/latest/overview/',
      
      // Configuration Management (Ansible) steps
      'step-1-ansible-basics': 'https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html',
      'step-2-ansible-playbooks': 'https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html',
      'step-3-ansible-inventory': 'https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html',
      'step-4-ansible-roles': 'https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_reuse_roles.html',
      'step-5-ansible-advanced': 'https://docs.ansible.com/ansible/latest/vault_guide/index.html',
      'step-6-ansible-enterprise': 'https://docs.ansible.com/ansible-tower/',

      // AI Engineer steps (trending AI resources)
      'step-1-ai-mathematics': 'https://www.khanacademy.org/math/linear-algebra',
      'step-2-ml-fundamentals': 'https://scikit-learn.org/stable/tutorial/index.html',
      'step-3-deep-learning': 'https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html',
      'step-4-ai-frameworks': 'https://tensorflow.org/learn',
      'step-5-specialized-ai': 'https://huggingface.co/course/chapter1/1',
      'step-6-ai-production': 'https://mlops.community/learn/',

      // QA Engineer steps
      'step-1-qa-fundamentals': 'https://www.guru99.com/software-testing-introduction-importance.html',
      'step-2-qa-manual-testing': 'https://www.browserstack.com/guide/manual-testing',
      'step-3-qa-defect-management': 'https://www.atlassian.com/software/jira/guides/use-cases/bug-tracking',
      'step-4-qa-automation': 'https://selenium-python.readthedocs.io/getting-started.html',
      'step-5-qa-api-performance': 'https://learning.postman.com/docs/getting-started/introduction/',
      'step-6-qa-cicd-integration': 'https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration',

      // System Administrator steps
      'step-1-os-fundamentals': 'https://linuxjourney.com/',
      'step-2-user-security': 'https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04',
      'step-3-network-services': 'https://ubuntu.com/server/docs/network-configuration',
      'step-4-storage-backup': 'https://www.redhat.com/sysadmin/linux-file-systems-explained',
      'step-5-monitoring-automation': 'https://prometheus.io/docs/introduction/getting_started/',
      'step-6-virtualization-cloud': 'https://docs.docker.com/get-started/',

      // Data Engineer steps
      'step-1-data-fundamentals': 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/',
      'step-2-programming-sql': 'https://docs.python.org/3/tutorial/',
      'step-3-etl-pipelines': 'https://airflow.apache.org/docs/apache-airflow/stable/tutorial.html',
      'step-4-big-data-tools': 'https://spark.apache.org/docs/latest/quick-start.html',
      'step-5-cloud-platforms': 'https://aws.amazon.com/getting-started/hands-on/build-data-lake/',
      'step-6-monitoring-optimization': 'https://docs.datadoghq.com/data_pipelines/',

      // Cloud Architect steps
      'step-1-cloud-fundamentals': 'https://aws.amazon.com/what-is-cloud-computing/',
      'step-2-architecture-patterns': 'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
      'step-3-platform-services': 'https://aws.amazon.com/getting-started/',
      'step-4-security-compliance': 'https://docs.aws.amazon.com/security/latest/userguide/what-is-aws-security.html',
      'step-5-optimization-automation': 'https://aws.amazon.com/architecture/cost-optimization/',
      'step-6-disaster-recovery': 'https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html',

      // AI Agents steps (trending AI/LLM engineering)
      'step-1-agent-fundamentals-trending': 'https://www.deeplearning.ai/the-batch/issue-215/',
      'step-2-llm-integration-trending': 'https://platform.openai.com/docs/api-reference/chat',
      'step-3-memory-knowledge-trending': 'https://docs.langchain.com/docs/modules/memory/',
      'step-4-conversation-design-trending': 'https://rasa.com/docs/rasa/conversation-driven-development/',
      'step-5-tool-integration-trending': 'https://langchain.readthedocs.io/en/latest/modules/agents/tools.html',
      'step-6-deployment-optimization-trending': 'https://docs.ray.io/en/latest/serve/index.html',

      // Machine Learning Engineer steps (trending AI/ML)
      'step-1-mle-python': 'https://scikit-learn.org/stable/getting_started.html',
      'step-2-mle-math': 'https://www.khanacademy.org/math/linear-algebra',
      'step-3-mle-algorithms': 'https://scikit-learn.org/stable/supervised_learning.html',
      'step-4-mle-frameworks': 'https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html',
      'step-5-mle-deployment': 'https://mlflow.org/docs/latest/tutorials-and-examples/index.html',
      'step-6-mle-projects': 'https://www.tensorflow.org/tutorials',

      // Monitoring & Observability (Prometheus) steps
      'step-1-prometheus-setup': 'https://prometheus.io/docs/introduction/getting_started/',
      'step-2-prometheus-metrics': 'https://prometheus.io/docs/prometheus/latest/configuration/configuration/',
      'step-3-promql': 'https://prometheus.io/docs/prometheus/latest/querying/basics/',
      'step-4-grafana-dashboards': 'https://grafana.com/docs/grafana/latest/getting-started/',
      'step-5-alerting': 'https://prometheus.io/docs/alerting/latest/overview/',
      'step-6-prometheus-production': 'https://prometheus.io/docs/prometheus/latest/federation/',

      // Salesforce Developer steps
      'step-1-platform-fundamentals': 'https://trailhead.salesforce.com/content/learn/modules/platform_dev_basics',
      'step-2-declarative-development': 'https://trailhead.salesforce.com/content/learn/modules/point_click_business_logic',
      'step-3-apex-programming': 'https://trailhead.salesforce.com/content/learn/modules/apex_basics_dotnet',
      'step-4-lightning-development': 'https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components',
      'step-5-integration-apis': 'https://trailhead.salesforce.com/content/learn/modules/api_basics',
      'step-6-testing-deployment': 'https://trailhead.salesforce.com/content/learn/modules/apex_testing',

      // E-commerce Developer steps  
      'step-1-ecommerce-fundamentals': 'https://www.shopify.com/partners/blog/ecommerce-business-blueprint',
      'step-2-platform-development': 'https://nextjs.org/learn/basics/create-nextjs-app',
      'step-3-payment-integration': 'https://stripe.com/docs/development',
      'step-4-inventory-management': 'https://docs.medusajs.com/development/overview',
      'step-5-optimization-analytics': 'https://web.dev/performance-scoring/',
      'step-6-mobile-scaling': 'https://nextjs.org/docs/app/building-your-application/deploying',

      // API Design roadmap steps (new expanded version)
      'step-1-apidesign-fundamentals': 'https://restfulapi.net/',
      'step-2-apidesign-rest': 'https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design',
      'step-3-apidesign-security': 'https://auth0.com/blog/a-look-at-the-latest-draft-for-oauth-2-security-best-practices/',
      'step-4-apidesign-graphql': 'https://graphql.org/learn/',
      'step-5-apidesign-docs': 'https://swagger.io/specification/',
      'step-6-apidesign-versioning': 'https://www.troyhunt.com/your-api-versioning-is-wrong-which-is/',

      // DevRel Engineer steps
      'step-1-devrel-fundamentals': 'https://developerrelations.com/what-is-developer-relations',
      'step-2-content-creation': 'https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis',
      'step-3-public-speaking': 'https://www.toastmasters.org/resources/public-speaking-tips',
      'step-4-community-engagement': 'https://github.com/cmty/awesome-community',
      'step-5-developer-experience': 'https://developerexperience.io/',
      'step-6-metrics-strategy': 'https://developerrelations.com/dev-rel/measuring-developer-relations',

      // Cyber Security steps
      'step-1-cybersecurity-fundamentals': 'https://www.cisa.gov/cybersecurity-best-practices',
      'step-2-cybersecurity-network': 'https://www.sans.org/white-papers/1206/',
      'step-3-cybersecurity-os': 'https://www.nist.gov/cyberframework',
      'step-4-cybersecurity-web': 'https://owasp.org/www-project-top-ten/',
      'step-5-cybersecurity-pentest': 'https://www.offensive-security.com/metasploit-unleashed/',
      'step-6-cybersecurity-incident': 'https://www.sans.org/white-papers/33901/',
      'step-7-cybersecurity-tools': 'https://www.cybrary.it/',

      // Technical Writing steps
      'step-1-writing-fundamentals': 'https://developers.google.com/tech-writing/one',
      'step-2-documentation-types': 'https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/',
      'step-3-tools-platforms': 'https://www.markdownguide.org/getting-started/',
      'step-4-api-documentation': 'https://swagger.io/resources/articles/best-practices-in-api-documentation/',
      'step-5-user-experience': 'https://uxwritinghub.com/',
      'step-6-collaboration-metrics': 'https://www.writethedocs.org/guide/docs-as-code/',
      
      // API Design steps
      'step-1-api-fundamentals': 'https://restfulapi.net/',
      'step-2-api-design-patterns': 'https://swagger.io/resources/articles/best-practices-in-api-design/',
      'step-3-api-specifications': 'https://swagger.io/specification/',
      'step-4-api-security': 'https://owasp.org/www-project-api-security/',
      'step-5-api-testing': 'https://postman.com/api-platform/',
      'step-6-api-versioning': 'https://restfulapi.net/versioning/',
      
      // BI Analyst steps
      'step-1-bi-fundamentals': 'https://www.microsoft.com/en-us/power-platform/products/power-bi',
      'step-2-bi-data-modeling': 'https://docs.microsoft.com/en-us/power-bi/guidance/star-schema',
      'step-3-bi-etl': 'https://docs.microsoft.com/en-us/sql/integration-services/',
      'step-4-bi-visualization': 'https://powerbi.microsoft.com/en-us/learning/',
      'step-5-bi-analysis': 'https://www.tableau.com/learn/training',
      'step-6-bi-reporting': 'https://docs.microsoft.com/en-us/sql/reporting-services/',
      
      // Elasticsearch & ELK steps
      'step-1-elasticsearch-basics': 'https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html',
      'step-2-elasticsearch-indexing': 'https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html',
      'step-3-elasticsearch-search': 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html',
      'step-4-logstash': 'https://www.elastic.co/guide/en/logstash/current/getting-started-with-logstash.html',
      'step-5-kibana': 'https://www.elastic.co/guide/en/kibana/current/get-started.html',
      'step-6-elk-stack': 'https://www.elastic.co/what-is/elk-stack',
      
      // Nginx Web Server steps
      'step-1-nginx-basics': 'https://nginx.org/en/docs/beginners_guide.html',
      'step-2-nginx-config': 'https://nginx.org/en/docs/http/ngx_http_core_module.html',
      'step-3-nginx-reverse-proxy': 'https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/',
      'step-4-nginx-load-balancing': 'https://nginx.org/en/docs/http/load_balancing.html',
      'step-5-nginx-ssl': 'https://nginx.org/en/docs/http/configuring_https_servers.html',
      'step-6-nginx-performance': 'https://nginx.org/en/docs/http/ngx_http_core_module.html#optimization',
      
      // Software Testing steps
      'step-1-testing-fundamentals': 'https://www.guru99.com/software-testing-introduction-importance.html',
      'step-2-test-planning': 'https://www.softwaretestinghelp.com/how-to-write-test-plan-document/',
      'step-3-manual-testing': 'https://www.guru99.com/manual-testing.html',
      'step-4-automation-testing': 'https://www.selenium.dev/documentation/',
      'step-5-performance-testing': 'https://jmeter.apache.org/usermanual/get-started.html',
      'step-6-test-management': 'https://www.atlassian.com/continuous-delivery/software-testing',
      
      // C# & .NET steps
      'step-1-csharp-basics': 'https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
      'step-2-csharp-oop': 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/',
      'step-3-dotnet-core': 'https://docs.microsoft.com/en-us/dotnet/core/introduction',
      'step-4-aspnet-web': 'https://docs.microsoft.com/en-us/aspnet/core/',
      'step-5-entity-framework': 'https://docs.microsoft.com/en-us/ef/core/',
      'step-6-advanced-dotnet': 'https://docs.microsoft.com/en-us/dotnet/core/testing/',
      
      // Swift Programming steps
      'step-1-swift-basics': 'https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html',
      'step-2-swift-advanced': 'https://docs.swift.org/swift-book/LanguageGuide/Closures.html',
      'step-3-swift-ios-basics': 'https://developer.apple.com/documentation/uikit',
      'step-4-swiftui': 'https://developer.apple.com/documentation/swiftui',
      'step-5-swift-ios-data': 'https://developer.apple.com/documentation/coredata',
      'step-6-swift-ios-advanced': 'https://developer.apple.com/documentation/xctest',
      
      // Kotlin Programming steps
      'step-1-kotlin-basics': 'https://kotlinlang.org/docs/getting-started.html',
      'step-2-kotlin-advanced': 'https://kotlinlang.org/docs/lambdas.html',
      'step-3-android-kotlin': 'https://developer.android.com/kotlin/first',
      'step-4-kotlin-coroutines': 'https://kotlinlang.org/docs/coroutines-overview.html',
      
      // AI Agents steps (AI-specific resources)
      'step-1-agent-fundamentals': 'https://arxiv.org/abs/1909.07930',
      'step-2-llm-integration': 'https://platform.openai.com/docs/guides/fine-tuning',
      'step-3-memory-knowledge': 'https://www.pinecone.io/learn/retrieval-augmented-generation/',
      'step-4-conversation-design': 'https://rasa.com/docs/rasa/conversation-patterns/',
      'step-5-tool-integration': 'https://langchain.readthedocs.io/en/latest/modules/agents/tools.html',
      'step-6-deployment-optimization': 'https://huggingface.co/docs/transformers/main_classes/pipelines',
      
      // Robotics Engineer steps (robotics-specific resources)
      'step-1-robotics-fundamentals': 'https://mitpress.mit.edu/9780262536325/introduction-to-robotics/',
      'step-2-ros-programming': 'http://wiki.ros.org/ROS/StartGuide',
      'step-3-sensors-perception': 'https://pointclouds.org/documentation/tutorials/',
      'step-4-motion-planning': 'https://ompl.kavrakilab.org/tutorials.html',
      'step-5-manipulation-control': 'https://moveit.ros.org/documentation/',
      'step-6-ai-integration': 'https://opencv.org/university/',
      
      // Tech Startup Founder steps (entrepreneurship-specific resources)
      'step-1-startup-fundamentals': 'http://www.paulgraham.com/start.html',
      'step-2-business-planning': 'https://www.strategyzer.com/business-model-canvas',
      'step-3-product-development': 'https://leanstartup.co/principles/',
      'step-4-fundraising-investment': 'https://www.ycombinator.com/library/',
      'step-5-team-operations': 'https://firstround.com/review/',
      'step-6-growth-scaling': 'https://blog.growthhackers.com/',
      
      // AI Red Teaming steps (AI security-specific resources)
      'step-1-ai-security-fundamentals': 'https://www.nist.gov/itl/ai-risk-management-framework',
      'step-2-adversarial-attacks': 'https://adversarial-ml-tutorial.org/',
      'step-3-prompt-injection': 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
      'step-4-automated-testing': 'https://github.com/microsoft/counterfit',
      'step-5-defense-strategies': 'https://www.anthropic.com/research/measuring-and-forecasting-risks-from-ai',
      'step-6-evaluation-reporting': 'https://arxiv.org/abs/2307.15043',
      
      // Software Architect steps (architecture-specific resources)
      'step-1-architecture-fundamentals': 'https://martinfowler.com/architecture/',
      'step-2-system-design': 'https://github.com/donnemartin/system-design-primer',
      'step-3-microservices-architecture': 'https://microservices.io/patterns/',
      'step-4-cloud-architecture': 'https://aws.amazon.com/architecture/well-architected/',
      'step-5-security-performance': 'https://owasp.org/www-project-application-security-architecture/',
      'step-6-leadership-governance': 'https://www.sei.cmu.edu/architecture/',
      
      // Server Side Game Dev steps (game development-specific resources)
      'step-1-server-fundamentals': 'https://www.gabrielgambetta.com/client-server-game-architecture.html',
      'step-2-networking-protocols': 'https://gafferongames.com/categories/networking/',
      'step-3-player-management': 'https://docs.unity3d.com/Manual/UNetUsingHLAPI.html',
      'step-4-scalability-performance': 'https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking',
      'step-5-game-logic-systems': 'https://www.unrealengine.com/en-US/blog/networking-and-multiplayer',
      'step-6-deployment-devops': 'https://docs.aws.amazon.com/gamelift/',
      
      // Research Scientist steps (academic/research-specific resources)
      'step-1-research-methodology': 'https://www.nature.com/scitable/topicpage/scientific-papers-13815490/',
      'step-2-statistical-analysis': 'https://www.r-project.org/about.html',
      'step-3-computational-methods': 'https://scipy.org/',
      'step-4-specialized-domains': 'https://arxiv.org/',
      'step-5-publication-dissemination': 'https://www.acm.org/publications/authors',
      'step-6-collaboration-leadership': 'https://www.nsf.gov/funding/',
      
      // AR/VR Developer steps (XR development-specific resources)
      'step-1-xr-fundamentals': 'https://docs.unity3d.com/Manual/XR.html',
      'step-2-unity-development': 'https://learn.unity.com/pathway/xr-development-pathway',
      'step-3-vr-development': 'https://developer.oculus.com/documentation/',
      'step-4-ar-development': 'https://developer.apple.com/augmented-reality/',
      'step-5-interaction-design': 'https://docs.microsoft.com/en-us/windows/mixed-reality/',
      'step-6-advanced-xr': 'https://immersive-web.github.io/webxr/',
      
      // Blockchain Developer steps (blockchain/Web3-specific resources)
      'step-1-blockchain-fundamentals': 'https://bitcoin.org/bitcoin.pdf',
      'step-2-ethereum-basics': 'https://ethereum.org/en/developers/docs/',
      'step-3-solidity-programming': 'https://docs.soliditylang.org/',
      'step-4-web3-development': 'https://web3js.readthedocs.io/',
      'step-5-advanced-concepts': 'https://defipulse.com/',
      'step-6-production-deployment': 'https://consensys.net/diligence/',
      
      // Data Engineer steps (data engineering-specific resources) - ALREADY EXISTS, NO DUPLICATES NEEDED
      
      // Cloud Solutions Architect steps - ALREADY EXISTS AS Cloud Architect, NO DUPLICATES NEEDED
      
      // Embedded Systems Engineer steps (embedded systems-specific resources)
      'step-1-embedded-fundamentals': 'https://docs.arduino.cc/learn/',
      'step-2-microcontrollers': 'https://www.st.com/content/st_com/en/support/learning/stm32-education.html',
      'step-3-rtos-programming': 'https://www.freertos.org/Documentation/RTOS_book.html',
      'step-4-hardware-interfaces': 'https://www.raspberrypi.org/documentation/',
      'step-5-iot-connectivity': 'https://docs.espressif.com/projects/esp-idf/',
      'step-6-system-optimization': 'https://www.arm.com/resources/education',
      
      // Game Developer steps (game development-specific resources) - using unique step names
      'step-1-gamedev-fundamentals': 'https://docs.unity3d.com/Manual/GameObjects.html',
      'step-2-gamedev-programming': 'https://learn.unity.com/pathway/unity-essentials',
      'step-3-gamedev-physics': 'https://docs.unity3d.com/Manual/PhysicsSection.html',
      'step-4-gamedev-graphics': 'https://docs.unity3d.com/Manual/Graphics.html',
      'step-5-gamedev-audio': 'https://docs.unity3d.com/Manual/Audio.html',
      'step-6-gamedev-deployment': 'https://docs.unity3d.com/Manual/PublishingBuilds.html',
      
      // IoT Developer steps (IoT development-specific resources)
      'step-1-iot-fundamentals': 'https://aws.amazon.com/iot/what-is-iot/',
      'step-2-hardware-sensors': 'https://www.arduino.cc/reference/en/',
      'step-3-connectivity-protocols': 'https://docs.microsoft.com/en-us/azure/iot-fundamentals/',
      'step-4-cloud-integration': 'https://aws.amazon.com/iot-core/',
      'step-5-data-analytics': 'https://cloud.google.com/iot',
      'step-6-security-deployment': 'https://www.iotforall.com/iot-security-best-practices',
      
      // Machine Learning Engineer steps - ALREADY EXISTS, NO DUPLICATES NEEDED (see step-1-mle-python above)
      
      // Network Engineer steps (networking-specific resources)
      'step-1-network-fundamentals': 'https://www.cisco.com/c/en/us/solutions/small-business/networking/networking-basics.html',
      'step-2-network-protocols': 'https://www.ietf.org/standards/rfcs/',
      'step-3-routing-switching': 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html',
      'step-4-network-security': 'https://www.sans.org/white-papers/',
      'step-5-wireless-technologies': 'https://www.wi-fi.org/discover-wi-fi/wi-fi-certified',
      'step-6-network-troubleshooting': 'https://www.wireshark.org/docs/',
      
      // Penetration Tester steps (penetration testing-specific resources)
      'step-1-pentest-fundamentals': 'https://www.offensive-security.com/metasploit-unleashed/',
      'step-2-reconnaissance': 'https://nmap.org/book/',
      'step-3-vulnerability-assessment': 'https://www.openvas.org/',
      'step-4-exploitation': 'https://www.exploit-db.com/',
      'step-5-post-exploitation': 'https://attack.mitre.org/',
      'step-6-reporting': 'https://www.sans.org/white-papers/33343/',
      
      // Platform Engineer steps (platform engineering-specific resources)
      'step-1-platformeng-fundamentals': 'https://platformengineering.org/blog/what-is-platform-engineering',
      'step-2-platformeng-infrastructure': 'https://www.terraform.io/docs',
      'step-3-platformeng-orchestration': 'https://kubernetes.io/docs/home/',
      'step-4-platformeng-automation': 'https://docs.github.com/en/actions',
      'step-5-platformeng-observability': 'https://opentelemetry.io/docs/',
      'step-6-platformeng-self-service': 'https://backstage.io/docs/',
      
      // Product Manager steps (product management-specific resources)
      'step-1-pm-fundamentals': 'https://www.productplan.com/learn/',
      'step-2-pm-market-research': 'https://www.surveymonkey.com/market-research/resources/',
      'step-3-pm-roadmap-strategy': 'https://www.aha.io/roadmapping/guide',
      'step-4-pm-user-experience': 'https://www.interaction-design.org/literature',
      'step-5-pm-analytics-metrics': 'https://mixpanel.com/blog/',
      'step-6-pm-stakeholder-mgmt': 'https://www.mindtheproduct.com/',
      
      // Site Reliability Engineer steps (SRE-specific resources)
      'step-1-sre-fundamentals': 'https://sre.google/sre-book/table-of-contents/',
      'step-2-monitoring-alerting': 'https://prometheus.io/docs/',
      'step-3-incident-response': 'https://response.pagerduty.com/',
      'step-4-automation-tooling': 'https://www.ansible.com/resources/ebooks',
      'step-5-capacity-planning': 'https://sre.google/workbook/table-of-contents/',
      'step-6-reliability-engineering': 'https://www.usenix.org/publications/loginonline',
      
      // Technical Writer steps (technical writing-specific resources) - ALREADY EXISTS, NO DUPLICATES NEEDED
      
      // Database Administrator steps (database administration-specific resources)
      'step-1-dba-fundamentals': 'https://www.postgresql.org/docs/current/tutorial.html',
      'step-2-database-design': 'https://docs.oracle.com/database/121/TDDDG/toc.htm',
      'step-3-performance-tuning': 'https://use-the-index-luke.com/',
      'step-4-backup-recovery': 'https://mariadb.com/kb/en/backup-and-restore-overview/',
      'step-5-security-compliance': 'https://www.postgresql.org/docs/current/user-manag.html',
      'step-6-automation-monitoring': 'https://docs.ansible.com/ansible/latest/collections/community/mysql/index.html'
    }
    return stepUrls[stepId] || 'https://developer.mozilla.org/en-US/docs/Learn'
  }



  if (!roadmap) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Roadmap Not Found</h1>
          <p className="text-gray-600 mb-6">The roadmap you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/roadmaps')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roadmaps
          </Button>
        </div>
      </div>
    )
  }



  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showAuth={false} />
      
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-6">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => router.push('/roadmaps')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Roadmaps
            </Button>
          </div>

          {/* Roadmap Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <h1 className="text-4xl font-bold text-gray-900">{roadmap.title}</h1>
                {roadmap.featured && (
                  <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                )}
              </div>
              
              <p className="text-xl text-gray-600 mb-6">{roadmap.description}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className={difficultyColors[roadmap.difficulty]}>
                  {roadmap.difficulty}
                </Badge>
                <Badge variant="secondary">{roadmap.category}</Badge>
                <Badge variant="outline">{roadmap.role}</Badge>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white rounded-lg border">
                  <Clock className="w-5 h-5 mx-auto text-blue-600 mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{roadmap.duration}</div>
                  <div className="text-xs text-gray-500">Duration</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <BookOpen className="w-5 h-5 mx-auto text-green-600 mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{roadmap.steps.length}</div>
                  <div className="text-xs text-gray-500">Steps</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <Target className="w-5 h-5 mx-auto text-purple-600 mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{roadmap.primary_skills.length}</div>
                  <div className="text-xs text-gray-500">Skills</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <TrendingUp className="w-5 h-5 mx-auto text-orange-600 mb-1" />
                  <div className="text-sm font-semibold text-gray-900">{roadmap.industry_demand || 'High'}</div>
                  <div className="text-xs text-gray-500">Demand</div>
                </div>
              </div>
            </div>

            {/* Roadmap Info Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Roadmap Info
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Time:</span>
                      <span className="font-medium">{roadmap.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Difficulty:</span>
                      <Badge variant="outline" className={`text-xs ${difficultyColors[roadmap.difficulty]}`}>
                        {roadmap.difficulty}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prerequisites:</span>
                      <span className="font-medium text-right text-xs">
                        {roadmap.prerequisites.length > 0 ? `${roadmap.prerequisites.length} items` : 'None'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Prerequisites */}
            {roadmap.prerequisites.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prerequisites</CardTitle>
                  <CardDescription>
                    Make sure you have these basics before starting this roadmap
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {roadmap.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Learning Steps */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Path</h2>
              <div className="space-y-4">
                {roadmap.steps.map((step, index) => (
                  <Card 
                    key={step.id} 
                  className="group transition-all duration-200 hover:shadow-md"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center">
                          <span className="text-blue-600 text-xs font-bold">{index + 1}</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-gray-500">Step {index + 1}</span>
                            <Badge variant="outline" className="text-xs">
                              {step.duration}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">
                              {step.title}
                            </CardTitle>
                            <Button size="sm" className="ml-4" asChild>
                              <a 
                                href={getStepLearningUrl(step.id)} 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <Play className="w-3 h-3 mr-1" />
                                Start Learning
                              </a>
                            </Button>
                          </div>
                          <CardDescription className="mt-2">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 ml-10">
                      {/* Topics */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Topics:</h4>
                        <div className="flex flex-wrap gap-1">
                          {step.topics.map((topic, topicIndex) => (
                            <Badge key={topicIndex} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Skills Gained */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Skills You'll Gain:</h4>
                        <div className="flex flex-wrap gap-1">
                          {step.skills_gained.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Resources */}
                      {step.resources && step.resources.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Resources:</h4>
                          <div className="space-y-2">
                            {step.resources.map((resource, resourceIndex) => (
                              <a
                                key={resourceIndex}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                <ExternalLink className="w-3 h-3" />
                                {resource.title}
                                <Badge variant="outline" className="text-xs">
                                  {resource.type}
                                </Badge>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Skills You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills You'll Master</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Primary Skills:</h4>
                    <div className="space-y-1">
                      {roadmap.primary_skills.map((skill, index) => (
                        <Badge key={index} variant="default" className="mr-1 mb-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {roadmap.secondary_skills.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Bonus Skills:</h4>
                      <div className="space-y-1">
                        {roadmap.secondary_skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="mr-1 mb-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Career Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Career Outlook</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Target Role:</span>
                  <span className="font-medium text-right">{roadmap.role}</span>
                </div>
                
                {roadmap.salary_range && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salary Range:</span>
                    <span className="font-medium">{roadmap.salary_range}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Industry Demand:</span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      roadmap.industry_demand === 'High' 
                        ? 'text-green-700 border-green-200' 
                        : roadmap.industry_demand === 'Medium'
                        ? 'text-yellow-700 border-yellow-200'
                        : 'text-red-700 border-red-200'
                    }`}
                  >
                    {roadmap.industry_demand || 'High'}
                  </Badge>
                </div>

                {roadmap.job_opportunities && roadmap.job_opportunities.length > 0 && (
                  <div>
                    <span className="text-gray-600 text-xs">Common Job Titles:</span>
                    <div className="mt-2">
                      {roadmap.job_opportunities.slice(0, 3).map((job, index) => (
                        <Badge key={index} variant="outline" className="text-xs mr-1 mb-1">
                          {job}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}