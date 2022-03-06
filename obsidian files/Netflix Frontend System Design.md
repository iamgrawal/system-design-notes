# Netflix Frontend System Design

## Index

## Content

### Requirements

#### Functional

##### Module Level Thinking

###### Supply

- Video upload
- Analytics
- Meta Info
- Tagging

###### Demand

- Multi-User Management
- Pricing & subscription
- Account management
- Help & Support
- Auth Module
- Movie/Series catalog
- Details Page
- Watch List
- Reviews

##### Feature Level Thinking

###### Homepage

- Language Change
- Log in/ Signup
- Configuration UI

###### Catalog

- Search
- Card Preview
- Banner Preview

###### Multi User Management

- Switching between users
- Parental Control

###### Video Player

- Speed
- Quality
- Language
- Subtitle
- Thumbnails over view

###### Review

- Like/Dislike
- Comments

#### Non Functional

- Mobile/Desktop
- Streaming
- Responsive
- Devices/Location
- Asset Optimization (Videos, Images, CSS, JS)
- Resource Hints
- Open Graphs Tags
- Deep Links
- Performance
- CSR/SSR
- Auth
- Security
- HTTP2/HTTP3
- Caching
- Offline
- PWA
- A/B testing
- Versioning
- Internationalization & Localization
- Testing

### Tech Stack

#### Library/Framework

- React JS
- Type Script
- RxJs
- Restify
- Falcor / Graph QL

#### Micro - Frontend

- Lattice - module federation

#### MonoRepo

- Lerna

#### Design System

- Hawkins

#### Build Tools

Webpack

#### Dependencies

- Image Blobs / image sprite / SVG
- Video tags / MediaSources
- HTTP1.1/2/3
- Streaming

### Streaming Protocols

#### Circa 2000

Macromedia develops **Real Time Messaging Protocol(RTMP)** for real-time video, audio, and data streaming between servers and Macromedia's Flash Player.

#### 2005

Adobe acquires Macromedia, later repurposes RTMP for broader streaming.

#### 2009

Apple releases the **HTTP Live Streaming(HLS)** protocol for adaptive bitrate streaming.

#### 2012

IS publishes open-source **Dynamic Adaptive Streaming over HTTP (DASH)** protocol for adaptive bitrate streaming.

#### 2017

Halvision releases the open-source **Secure Reliable Transport (SRT)** protocol, designed for low-latency live video transmission.

### HTTP Protocols

![[Pasted image 20220306010008.png]]

### Multiplexing

![[Pasted image 20220306014639.png]]

### TCP vs UDP

| TCP                   | UDP                     |
| --------------------- | ----------------------- |
| Connected             | Connectionless          |
| State memory          | Stateless               |
| Byte Stream           | Packet/Datagram         |
| Ordered Data Delivery | No Sequence Guarantee   |
| Reliable              | Lossy                   |
| Error Free            | Error Packets Discarded |
| Handshake             | No Handshake            |
| FlowControl           | No Flow Control         |
| Relatively Slow       | Relatively Fast         |

### Challenges with the player

Video Tag + MediaSource

- Automatically jump gaps in content.
- Support for storing content offline, including protected content.
- Authentication
- Pre-load feature
- Cast support
- HLS(HTTP Live Streaming)/MSS(Microsoft Smooth Streaming) Support
- Thumbnails for seeking
- PWAs & service workers
- Network filters
- Retries
- Apple HLS vs Microsoft Smooth Streaming vs Adobe HDS support

### Comparison table for popular video players

![[Pasted image 20220306020906.png]]

### Component Design

Think of these things before designing the components

- Skeleton Visualization
- Component Hierarchy
  - Design System
  - Page Flow
- Services
- Routing
- Data Sharing

### Data API & Implementation

#### Protocols

- Rest/GraphQL
- JSON

#### Implementation Details

- Pagination/Infinite Scrolls
- Debouncing/Throttling
- Video Streaming
- Configurable UI
- Preview
- Image Optimization

#### Data Modeling

- URL
- Method
- Request (query, body)
- Response (Data, Error)
- Status Code

#### Component API

- State/Props
- Event handling
- Customization (Theming)
- Reusability
- Data Source

#### APIs

- getGeneres()
- getVideos()
- getVideoDetails()
- userPersonalization()

#### Data Response

```js
{
  uiLocale;
  appVersion;
  uiVersion;
  userAgent;
  bandwidth;
}
```

### Backend for the frontend

![[Pasted image 20220306023120.png]]
