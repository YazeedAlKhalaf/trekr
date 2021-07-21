//
//  LocationInfoView.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import SwiftUI

struct LocationInfoView: View {
    let location: Location
    
    var body: some View {
        ScrollView {
            NetworkImageWidget(url: location.heroPicture)
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
        }.navigationTitle("Location Info")
    }
}

struct LocationInfoView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            LocationInfoView(location: Location.example)
        }
    }
}
