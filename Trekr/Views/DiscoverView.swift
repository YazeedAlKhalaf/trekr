//
//  ContentView.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import SwiftUI

struct DiscoverView: View {
    let location: Location
    
    var body: some View {
        ScrollView {
            Image(location.heroPicture)
                .resizable()
                .scaledToFit()
                .cornerRadius(15)
                .padding()
            
            Text(location.name)
                .font(.largeTitle)
                .bold()
                .multilineTextAlignment(.center)
            
            Text(location.country)
                .font(/*@START_MENU_TOKEN@*/.title/*@END_MENU_TOKEN@*/)
                .foregroundColor(.secondary)
            
            Text(location.description)
                    .padding(.horizontal)
            
            Text("Did you know?")
                .font(.title3)
                .bold()
                .padding(.top)
            
            Text(location.more)
                    .padding(.horizontal)
        }.navigationTitle("Discover")
    }
}

struct DiscoverView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            DiscoverView(location: Location.example)
        }
    }
}
